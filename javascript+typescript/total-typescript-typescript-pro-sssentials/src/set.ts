/** @format */

const numbers = new Set<number>()
const oddNumber: Set<number> = new Set()
const evenNumber: Set<number> = new Set([2, 4, 6, 8])

numbers.add(1)
oddNumber.add(1)
evenNumber.add(10)

// @ts-expect-error
numbers.add("")
// @ts-expect-error
oddNumber.add("")
// @ts-expect-error
evenNumber.add("")
