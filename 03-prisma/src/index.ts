import { PrismaClient } from '@prisma/client'
import http from 'http'
const prisma = new PrismaClient()

async function main() {
    const server = http.createServer(async (req, res) => {
        // get all users
        if (req.url === '/users' && req.method === 'GET') {
            const users = await prisma.user.findMany()

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(users))

            // 404
        } else {
            res.writeHead(404)
            res.end()
        }
    })

    server.listen(8000, '127.0.0.1', () => {
        console.log('Listening on http://127.0.0.1:8000')
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
