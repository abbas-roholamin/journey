/** @format */

type User = {
  id: number
  name: string
}

const numbers = new Map<number, User>()
const oddNumber: Map<number, User> = new Map()
const evenNumber: Map<number, User> = new Map([
  [2, { id: 1, name: "abbas" }],
  [4, { id: 2, name: "Ali" }],
  [6, { id: 3, name: "Reza" }],
])

numbers.set(1, { id: 1, name: "abbas" })
oddNumber.set(1, { id: 1, name: "abbas" })
evenNumber.set(10, { id: 1, name: "abbas" })

// @ts-expect-error
numbers.set("", "hello")
// @ts-expect-error
oddNumber.set("", "hello")
// @ts-expect-error
evenNumber.set(1, "hello")

// Map Narrowing

type Event = {
  message: string
}

function customEvent(eventMap: Map<string, Event>) {
  // Problem
  // if (eventMap.has("error")) {
  //   const msg = eventMap.get("error")
  //   throw new Error(msg)
  // }

  // Solution
  const event = eventMap.get("error")
  if (event) {
    const msg = event.message
    throw new Error(msg)
  }
}
