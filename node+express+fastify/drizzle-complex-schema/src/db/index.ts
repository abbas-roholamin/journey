/** @format */

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-serverless"
import env from "../env"
import * as schema from "./schemas"

export const connection = neon(env.DATABASE_URL)
export const db = drizzle(
  { client: connection },
  {
    schema,
    logger: true,
  },
)

export type db = typeof db

export default db
