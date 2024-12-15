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

            // get single user
        } else if (req.url?.startsWith('/users/') && req.method === 'GET') {
            const id = req.url.split('/')[2]
            const user = await prisma.user.findUnique({ where: { id: Number(id) } })

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user))

            // create user
        } else if (req.url === '/users' && req.method === 'POST') {
            const body: any = []

            req.on('data', (chunk) => {
                body.push(chunk)
            })

            req.on('end', async () => {
                const user = JSON.parse(Buffer.concat(body).toString())
                await prisma.user.create({ data: user })

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(user))
            })

            // Update User
        } else if (req.url?.startsWith('/users/') && req.method === 'PUT') {
            const id = req.url.split('/')[2]
            const body: any = []

            req.on('data', (chunk) => {
                body.push(chunk)
            })

            req.on('end', async () => {
                const user = JSON.parse(Buffer.concat(body).toString())
                await prisma.user.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        ...body,
                    },
                })

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(user))
            })

            //404
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
