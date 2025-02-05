/** @format */

export const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
  required: ["name"],
}

export const getItemsFilter = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
}

export const getItemFilter = {
  schema: {
    response: {
      200: Item,
    },
  },
}

export const createItemDto = {
  schema: {
    body: Item,
  },
}

export const updateItemDto = {
  schema: {
    body: Item,
    response: {
      200: Item,
    },
  },
}
