/** @format */
type User = {
  id: number
  name: string
}

type MakeChangeFunc = (user: User) => User
export function updateUser(
  users: User[],
  id: number,
  makeChange: MakeChangeFunc,
) {
  return users.map((user) => (user.id === id ? makeChange(user) : user))
}

/****************** Void ***************************/
export function logMessage(message: string): void {
  console.log(message)
}

// Nul Prama

export function addTax(amount: number | null): number {
  const price = 100
  return amount ? price + amount : price
}

// Restricted Function params
type Directions = "left" | "right"
export function move(direction: Directions, distance: number): string {
  return `${direction} - ${distance}`
}
