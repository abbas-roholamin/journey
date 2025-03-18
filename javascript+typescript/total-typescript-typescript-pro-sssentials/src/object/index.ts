/** @format */

export const routes = {
  admin: "/",
  home: "/home",
} as const

type Routes = (typeof routes)[keyof typeof routes]
export function getRoute(url: Routes): string {
  return url
}

// Inference diff between let and const

type ButtonAttribute = {
  type: "button" | "submit" | "reset"
}

// let type = "button"
const type = "button"

export const buttonAttribute: ButtonAttribute = {
  type,
}

export const buttonProp = Object.freeze({
  cancel: {
    type: "button",
  },
  submit: {
    type: "submit",
  },
})

export const buttonProps = {
  cancel: {
    type: "button",
  },
  submit: {
    type: "submit",
  },
} as const
