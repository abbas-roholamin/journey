/** @format */
import { describe, expect, it } from "vitest"
import { parsData } from "."

describe("JSON", () => {
  it("should parse data", () => {
    expect(parsData.name).toBe("John")
    expect(parsData.age).toBe(30)
  })
})
