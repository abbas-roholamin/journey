import express from 'express'
import UserController from './controllers/user.controller'
import { prisma } from '../prisma.db'
import postController from './controllers/post.controller'

async function main() {
    const app = express()

    app.use(express.json())

    // User Routes
    app.get('/users', UserController.index)
    app.post('/users', UserController.create)
    app.patch('/users/:id', UserController.update)
    app.delete('/users/:id', UserController.delete)

    // Post Routes
    app.get('/posts', postController.index)
    app.post('/posts', postController.create)
    app.patch('/posts/:id', postController.update)
    app.delete('/posts/:id', postController.delete)
    app.post('/posts/like', postController.like)

    app.listen(8800, '127.0.0.1', () => {
        console.log('Listening on http://127.0.0.1:8800')
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
