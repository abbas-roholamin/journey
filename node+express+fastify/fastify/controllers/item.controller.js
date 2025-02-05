/** @format */

import data from "../data.js"

class ItemController {
  async getItems(req, replay) {
    replay.send(data)
  }

  async getItem(req, replay) {
    const { id } = req.params
    const [item] = data.filter((item) => item.id === parseInt(id))
    replay.send(item)
  }

  async createItem(req, replay) {
    const item = req.body
    const newItem = {
      id: data.length + 1,
      ...item,
    }
    data.push(newItem)
    replay.send(newItem)
  }

  async updateItem(req, replay) {
    const { id } = req.params
    const { name } = req.body
    const [item] = data.filter((item) => item.id === parseInt(id))
    item.name = name
    replay.send(item)
  }

  async deleteItem(req, replay) {
    const { id } = req.params
    const [item] = data.filter((item) => item.id === parseInt(id))
    data.splice(data.indexOf(item), 1)
    replay.send(item)
  }
}

export const itemController = new ItemController()
