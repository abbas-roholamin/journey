/** @format */

import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import env from "./src/env"
export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schemas/index.ts",
  strict: true,
  verbose: true,
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
