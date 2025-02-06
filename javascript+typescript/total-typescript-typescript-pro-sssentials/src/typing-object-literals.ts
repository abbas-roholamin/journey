/** @format */
type User = {
  firstName: string
  lastName: string
  age?: number
}

const user: User = {
  firstName: "abbas",
  lastName: "ali",
}

function concatName(user: User): string {
  return `${user.firstName} ${user.lastName} ${user.age || ""}`
}

concatName(user)
