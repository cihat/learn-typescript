const { getItem, getItems, addItem } = require("../controllers/items");

const Item = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
};

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemsOpts = {
  schema: {
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

function itemRoutes(fastify, options, done) {
  //Get all items
  fastify.get("/items", getItemsOpts);

  //Get item by id
  fastify.get("/items/:id", getItemOpts);

  //Add new item
  fastify.post("/items", postItemsOpts);
  done();
}

module.exports = itemRoutes;
