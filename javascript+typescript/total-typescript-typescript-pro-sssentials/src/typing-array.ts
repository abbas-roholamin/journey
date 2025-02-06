/** @format */
type Item = {
  id: number
  name: string
}

type Cart = {
  id: number
  price: number
  items: Item[]
  discounts: Array<string>
  tags: string[]
}

const data = {
  id: 1,
  price: 100,
  items: [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
  discounts: ["STM124", "STM144"],
  tags: ["tag1", "tag2"],
}

const checkCart = (cart: Cart) => {
  console.log(JSON.stringify(cart))
}

checkCart(data)
