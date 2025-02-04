/** @format */
import { describe, expect, it } from "vitest"

import { logMessage, updateUser } from "."

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
})
