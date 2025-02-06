/** @format */
import { describe, expect, it } from "vitest"
import { fetchTodo, fetchTodos } from "."

describe("Promise", () => {
  it("Get todo", async () => {
    const todo = await fetchTodo()
    expect(todo).toStrictEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    })
  })

  it("Get todos", async () => {
    const todos = await fetchTodos()
    expect(todos).toHaveLength(200)
  })
})
