/** @format */
import { describe, expect, it } from "vitest"
import { getRoute, routes } from "."

describe("Object", () => {
  it("Must Be Return URL", () => {
    expect(getRoute(routes.admin)).toBe("/")
  })
})
