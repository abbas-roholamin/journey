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

// Combining Union Types
type ErrorCodes = 402 | 404 | 500
export function handleError(code: ErrorCodes, message: string): string {
  return `${message} - ${code}`
}

type SuccessCodes = 200 | 201
export function handleSuccess(code: SuccessCodes, message: string): string {
  return `${message} - ${code}`
}

export function handleRequest(
  code: SuccessCodes | ErrorCodes,
  message: string,
): string {
  return `${message} - ${code}`
}

// Conditional Narrowing in TypeScript

export function validationUsername(username: string | null): boolean {
  // 01
  // if (username) {
  //   return username.length > 5
  // }

  // 02
  if (typeof username === "string") {
    return username.length > 5
  }

  return false
}

// Narrowing with in
type ResponseData = {
  data: [
    {
      id: number
      name: string
    },
  ]
}

type ResponseError = {
  error: string
}

type Response = ResponseData | ResponseError
export function apiResponse(res: Response) {
  // Problem
  // if (true) {
  //   return res.data[0].id
  // } else {
  //   return new Error(res.error)
  // }

  // Solution
  if ("data" in res) {
    return res.data[0].id
  } else {
    return new Error(res.error)
  }
}

// Never Type

function throwError(message: string): never {
  throw new Error(message)
}

export function handleSearchParams(params: { id?: string }) {
  const id = params.id || throwError("No id provided")

  return id
}

// Narrowing behavior across scops
export function findUserByName(
  searchParams: {
    name?: string
  },
  users: {
    id: number
    name: string
  }[],
) {
  const name = searchParams.name
  if (name) {
    return users.filter((user) => {
      return user.name.includes(name)
    })
  }

  return users
}
