/** @format */
const { it, describe } = require("node:test")
const assert = require("node:assert")

describe("base test", () => {
  it("should pass", () => {
    assert.equal(1, 1)
  })

  it("should fail", () => {
    assert.equal(1, 2)
  })
})
