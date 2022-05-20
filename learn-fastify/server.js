const fastify = require("fastify")({ logger: true });
const PORT = process.env.PORT || 5000;
const itemsRoutes = require("./routes/items");
const swagger = require("fastify-swagger");

fastify.register(swagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-api" },
  },
});
fastify.register(itemsRoutes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
