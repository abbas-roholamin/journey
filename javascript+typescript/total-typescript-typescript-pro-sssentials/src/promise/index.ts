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
