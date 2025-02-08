/** @format */

import express from "express"
import Redis from "redis"

const app = express()
const redis = Redis.createClient()

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
