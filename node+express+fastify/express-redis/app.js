/** @format */

import express, { json } from "express"
import { createClient } from "redis"

process.loadEnvFile("./.env")

const app = express()
const redis = createClient()
await redis.connect()

app.get("/photos", async (req, res) => {
  const photos = await redis.get("photos", (err, data) => {
    if (err) console.log(err)
    return JSON.parse(data)
  })

  if (photos) {
    res.json({ source: "cache", data: JSON.parse(photos) })
  } else {
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos`)

    const data = await result.json()

    redis.setEx(
      "photos",
      process.env.REDIS_CACHE_EXPIRATION,
      JSON.stringify(data),
    )

    res.json({ source: "API", data })
  }
})

app.get("/photos/:id", async (req, res) => {
  const { id } = req.params
  const photo = await redis.get(`photo:${id}`, (err, data) => {
    if (err) console.log(err)
    return JSON.parse(data)
  })

  if (photo) {
    res.json({ source: "cache", data: JSON.parse(photo) })
  } else {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    )

    const data = await result.json()

    redis.setEx(
      `photo:${id}`,
      process.env.REDIS_CACHE_EXPIRATION,
      JSON.stringify(data),
    )

    res.json({ source: "API", data })
  }
})

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000")
})
