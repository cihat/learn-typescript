import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";

export default fp<SwaggerOptions>(async (fastify, opts) => {
  fastify.register(swagger, {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Swagger Docs",
        description: "Fastify swagger API",
        version: "0.1.0",
      },
    },
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });
});
