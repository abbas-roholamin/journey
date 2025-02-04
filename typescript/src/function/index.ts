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
