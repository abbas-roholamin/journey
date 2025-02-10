/** @format */
import { describe, expect, it } from "vitest"
import { fetchTodo, fetchTodos, fetchUser, fetchUserBool } from "."

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

  describe("Fetch Users", () => {
    it("Status Success", async () => {
      const [status] = await fetchUser()
      expect(status).toBe("success")
    })

    it("Status Error", async () => {
      const [status] = await fetchUser("error")
      expect(status).toBe("error")
    })
  })

  describe("Fetch Users", () => {
    it("Status Success", async () => {
      const [succeed] = await fetchUserBool()
      expect(succeed).toBeTruthy()
    })

    it("Status Error", async () => {
      const [succeed] = await fetchUserBool("error")
      expect(succeed).toBeFalsy()
    })
  })
})
