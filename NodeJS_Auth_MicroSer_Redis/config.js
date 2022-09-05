module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "tavwkYFt9r",
    password: process.env.MYSQL_PASS || "BxXv27oovz",
    database: process.env.MYSQL_DB || "tavwkYFt9r",
  },
  mysqlService: {
    host: process.env.MYSQL_SRT_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.CACHE_SRT_HOST || "localhost",
    port: process.env.CACHE_SRV_PORT || 3003,
  },
  redis: {
    dbUser: "default",
    dbPass: "HHwaz1OcoYtv6aN0AIuiGnxzsaP3TxwB",
    dbHost: "redis-19277.c8.us-east-1-4.ec2.cloud.redislabs.com",
    dbPort: "19277",
  },
};
