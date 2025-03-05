/** @format */

// index signature
interface RequiredScore {
  math: number
  english: number
}
interface Scores extends RequiredScore {
  [key: string]: number
}

// @ts-expect-error
const scores: Scores = {
  math: 1209,
  english: 120,
  science: 120,
}

// Declaration merging in interface

interface Logger {
  log(message: string, code: number): void
  // code: number
}

interface Logger {
  log(message: string): void
  // status: number
}

// @ts-expect-error
const myLogger: Logger = {
  log(message: string) {
    console.log(message)
  },
}
