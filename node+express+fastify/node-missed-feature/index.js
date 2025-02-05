/** @format */
const http = require("http")

// 04 Generate a random UUID
const uuid = require("crypto").randomUUID()

//01 Load environment variables
process.loadEnvFile(".env")

const server = http.createServer((req, res) => {
  res.end(uuid)
})

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
