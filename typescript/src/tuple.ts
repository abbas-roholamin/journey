/** @format */

type Location = [number, number]
type Location2 = [lang: number, lat: number]

function location(location: Location) {
  console.log(location[0])
  console.log(location[1])
}

function location2(location: Location2) {
  console.log(location[0])
  console.log(location[1])
}

location([1, 2])
location([1, 2, 3])
location([1])

location2([1, 2])
location2([1, 2, 3])
location2([1])
