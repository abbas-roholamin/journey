/** @format */
type User = {
  firstName: string
  lastName: string
  age?: number
}

const user: User = {
  firstName: "abbas",
  lastName: "ali",
}

function concatName(user: User): string {
  return `${user.firstName} ${user.lastName} ${user.age || ""}`
}

concatName(user)

// Extending Object with Type
type TBaseEntity = {
  id: number
  created_at: Date
}

type TCustomer = {
  name: string
  email: string
} & TBaseEntity

type TProduct = {
  name: string
  price: number
} & TBaseEntity

export const type_customer: TCustomer = {
  id: 1,
  name: "abbas",
  email: "abbas@.com",
  created_at: new Date(),
}

export const type_product: TProduct = {
  id: 1,
  name: "abbas",
  price: 100,
  created_at: new Date(),
}

// Extending Object with Interface
interface IBaseEntity {
  id: number
  created_at: Date
}

interface ICustomer extends IBaseEntity {
  name: string
  email: string
}

interface IProduct extends IBaseEntity {
  name: string
  price: number
}

export const interface_customer: ICustomer = {
  id: 1,
  name: "abbas",
  email: "abbas@.com",
  created_at: new Date(),
}

export const interface_product: IProduct = {
  id: 1,
  name: "abbas",
  price: 100,
  created_at: new Date(),
}
