/** @format */
type JSON = {
  name: number
  age: number
}

/****************** Void ***************************/
export const parsData: JSON = JSON.parse('{"name": "John", "age": 30}')
