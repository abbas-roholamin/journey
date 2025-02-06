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
