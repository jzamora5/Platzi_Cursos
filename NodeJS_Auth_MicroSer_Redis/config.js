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
    password: process.env.MYSQL_PASS || "BxXv27oovz",
    database: process.env.MYSQL_DB || "tavwkYFt9r",
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
};
