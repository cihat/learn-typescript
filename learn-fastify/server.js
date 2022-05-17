const fastify = require("fastify")({ logger: true });
const PORT = process.env.PORT || 5000;
const items = require("./Items");

fastify.get("/items", async (req, reply) => {
  reply.send(items);
});

fastify.get("/items/:id", async (req, reply) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);

  reply.send(item);
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
