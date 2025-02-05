/** @format */
import { itemController } from "../controllers/item.controller.js"
import {
  createItemDto,
  getItemFilter,
  getItemsFilter,
  updateItemDto,
} from "../schemas/item.schema.js"

export default function itemRouter(fastify, options, done) {
  // Declare a route
  fastify.get("/items", getItemsFilter, itemController.getItems)
  fastify.get("/items/:id", getItemFilter, itemController.getItem)
  fastify.post("/items", createItemDto, itemController.createItem)
  fastify.put("/items/:id", updateItemDto, itemController.updateItem)
  fastify.delete("/items/:id", itemController.deleteItem)

  done()
}
