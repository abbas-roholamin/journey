/** @format */
import { describe, expect, it } from "vitest"

describe("Array", () => {
  it("Must have one item", () => {
    const arr = [1]
    expect(arr.length).toBe(1)
  })
})
