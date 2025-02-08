/** @format */
import { describe, expect, it } from "vitest"

import {
  addTax,
  handleError,
  handleRequest,
  handleSuccess,
  logMessage,
  move,
  updateUser,
  validationUsername,
} from "."

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

  describe("Restricted params", () => {
    it("should return ", () => {
      const result = move("left", 100)
      expect(result).toBe("left - 100")
    })
  })

  describe("Combining Union Types", () => {
    it("should return 404", () => {
      const result = handleError(404, "Not Found")
      expect(result).toBe("Not Found - 404")
    })

    it("should return 200", () => {
      const result = handleRequest(201, "Request")
      expect(result).toBe("Request - 201")
    })
  })

  // Narrowing

  describe("Conditional Narrowing", () => {
    it("should return true", () => {
      const result = validationUsername("abbas-roholamin")
      expect(result).toBeTruthy()
    })

    it("should return false", () => {
      const result = validationUsername(null)
      expect(result).toBeFalsy()
    })
  })
})
