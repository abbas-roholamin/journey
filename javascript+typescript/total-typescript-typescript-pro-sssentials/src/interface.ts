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
