const db = {
  user: [{ id: "1", name: "Carlos" }],
};

async function list(tabla) {
  return db[tabla];
}

async function get(tabla, id) {
  let col = await list(tabla);
  console.log("col", col);
  return col.filter((item) => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
  db[tabla].push(data);
}

async function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
