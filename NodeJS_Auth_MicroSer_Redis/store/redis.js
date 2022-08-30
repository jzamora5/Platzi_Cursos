const redis = require("redis");
const config = require("../config");

const client = redis.createClient({
  // host: config.cacheService.dbHost,
  // port: config.cacheService.dbPort,
  // password: config.cacheService.dbPass
  url: `redis://${config.redis.dbUser}:${config.redis.dbPass}@${config.redis.dbHost}:${config.redis.dbPort}`,
});

(async () => {
  await client.connect();
  console.log("Conectado a REDIS");
})();

module.exports = {
  async list(table) {
    const value = await client.get(table);
    return JSON.parse(value);
  },

  async get(table, id) {
    const value = await client.get(`${table}_${id}`);
    return JSON.parse(value);
  },

  async upsert(table, data) {
    let key = table;
    if (data && data.id) {
      key += "_" + data.id;
    }
    await client.setEx(key, 10, JSON.stringify(data));
    return true;
  },
};
