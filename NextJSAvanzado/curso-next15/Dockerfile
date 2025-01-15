# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.12.2
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

ARG POSTGRESQL_ENDPOINT=""
ARG SESSION_SECRET=""
ARG LAUNCHDARKLY_SDK_KEY=""
ARG SENTRY_DSN=""

ENV POSTGRESQL_ENDPOINT=${POSTGRESQL_ENDPOINT}
ENV SESSION_SECRET=${SESSION_SECRET}
ENV LAUNCHDARKLY_SDK_KEY=${LAUNCHDARKLY_SDK_KEY}
ENV SENTRY_DSN=${SENTRY_DSN}


# Install pnpm
ARG PNPM_VERSION=9.14.4
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY . .

# Build application
RUN pnpm run build

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
