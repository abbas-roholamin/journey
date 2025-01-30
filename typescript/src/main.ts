/** @format */

// typescript types
const str: string = "Hello"
const num: number = 42
const bool: boolean = true
const arr: number[] = [1, 2, 3]
const sym: symbol = Symbol("hello")
const nullVar: null = null
const undef: undefined = undefined
const nn: bigint = 122n
const obj: object = { foo: "bar" }
const tuple: [number, string] = [1, "hello"]
const enumVal: "red" | "green" | "blue" = "red"
const func: () => void = () => console.log("hello")
const anyVal: any = "hello" // Any type
// const neverVal: never = (x: never) => x // Never typ

console.log(
  str,
  num,
  bool,
  arr,
  sym,
  nullVar,
  undef,
  nn,
  obj,
  tuple,
  enumVal,
  func,
  anyVal,
  // neverVal,
)

// 028 Optional Function Parameters
function add(x: number, y?: number): number {
  return y ? x + y : x
}

console.log(add(1, 2), add(1))
