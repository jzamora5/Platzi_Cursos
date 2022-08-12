module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "tavwkYFt9r",
    password: process.env.MYSQL_PASS || "bexbAUg3OP",
    database: process.env.MYSQL_DB || "tavwkYFt9r",
  },
};
