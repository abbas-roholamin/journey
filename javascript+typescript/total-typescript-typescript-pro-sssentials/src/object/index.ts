/** @format */

export const routes = {
  admin: "/",
  home: "/home",
} as const

type Routes = (typeof routes)[keyof typeof routes]
export function getRoute(url: Routes): string {
  return url
}
