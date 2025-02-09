/** @format */
type ShoppingCartType = {
  items: string[]
}

// By default item type will be never
const shoppingCart: ShoppingCartType = {
  items: [],
}

shoppingCart.items.push("Apple")
