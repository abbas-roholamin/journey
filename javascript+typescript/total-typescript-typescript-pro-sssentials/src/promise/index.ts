/** @format */
type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
export async function fetchTodo(): Promise<Todo> {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = result.json()
  return data
}

export async function fetchTodos() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data: Promise<Todo[]> = result.json()
  return data
}

// Narrowing with instanceof

export async function searchTodo(query?: string) {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/todos?q=${query}`,
    )
    const data: Promise<Todo[]> = result.json()

    if ((await data).length == 0) {
      throw new Error("No todo found")
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

// Discriminated unions in tuples

type user = {
  id: number
  name: string
  username: string
  email: string
  address: Object[]
  phone: string
  website: string
  company: Object[]
}

type ApiResponse = ["error", string] | ["success", user[]]
export async function fetchUser(path: string = "users"): Promise<ApiResponse> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    if (!res.ok) {
      return ["error", res.statusText]
    }

    const data = await res.json()
    return ["success", data]
  } catch (error) {
    const err = error as Error
    return ["error", err.message]
  }
}

// Discriminated unions in tuples with boolean

type ApiResponseBool = [false, string] | [true, user[]]
export async function fetchUserBool(
  path: string = "users",
): Promise<ApiResponseBool> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    if (!res.ok) {
      return [false, res.statusText]
    }

    const data = await res.json()
    return [true, data]
  } catch (error) {
    const err = error as Error
    return [false, err.message]
  }
}
