/** @format */
import { describe, expect, it } from "vitest"

import { addTax, logMessage, updateUser } from "."

describe("Function", () => {
  it("should update user", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]
    const updatedUsers = updateUser(users, 1, (user) => ({
      ...user,
      name: "John Doe",
    }))
    expect(updatedUsers).toEqual([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane" },
    ])
  })

  // Void
  it("should log message", () => {
    const message = logMessage("hello")
    expect(message).toBeUndefined()
  })

  // Null
  describe("Null", () => {
    it("should return 100", () => {
      const tax = addTax(null)
      expect(tax).toBe(100)
    })

    it("should return 110", () => {
      const tax = addTax(10)
      expect(tax).toBe(110)
    })
  })
})
