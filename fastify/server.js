/** @format */
import Fastify from "fastify"
import itemRouter from "./routes/itemRouter.js"
import fastifySwagger from "@fastify/swagger"

const fastify = Fastify({
  logger: false,
})

await fastify.register(fastifySwagger, {
  exposeHeadRoutes: true,
  prefix: "/docs",
  swagger: {
    info: {
      title: "Fastify API",
    },
  },
})

fastify.register(itemRouter)

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
