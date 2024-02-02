/** @type {import('next').NextConfig} */

import path from "path";
const __dirname = path.resolve();

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
