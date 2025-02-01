/** @format */

function sum(...args: number[]) {
  return args.reduce((a, b) => a + b)
}

sum(1, 2, 4)
