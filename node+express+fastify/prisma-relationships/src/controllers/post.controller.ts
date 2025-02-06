import { prisma } from '../../prisma.db'

type createDto = {
    title: string
    body: string
    author_id: number
}

type updateDto = Partial<createDto>

class PostController {
    public async index(_, res: any) {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                Likes: true,
            },
        })
        return res.json(posts)
    }

    public async create(req: any, res: any) {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty!' })
            return
        }

        const body: createDto = req.body

        const post = await prisma.post.create({
            data: {
                title: body.title,
                body: body.body,
                author_id: body.author_id,
            },
            select: {
                title: true,
                body: true,
                author: true,
            },
        })

        res.status(201).send({ post })
    }

    public async update(req: any, res: any) {
        const { id } = req.params

        if (!req.body || !id) {
            res.status(400).send({ message: 'Content can not be empty!' })
            return
        }

        const body: updateDto = req.body

        const post = await prisma.post.update({
            where: {
                id: +id,
            },
            data: {
                title: body.title,
                body: body.body,
            },
            select: {
                title: true,
                body: true,
                author: true,
            },
        })

        res.status(200).send({ post })
    }

    public async delete(req: any, res: any) {
        const { id } = req.params

        if (!id) {
            res.status(400).send({ message: 'ID can not be empty!' })
            return
        }

        const post = await prisma.post.delete({
            where: {
                id: +id,
            },
        })

        res.status(200).send({ post })
    }

    public async like(req: any, res: any) {
        const body = req.body

        if (!body) {
            res.status(400).send({ message: 'Author and Post ID requered' })
            return
        }

        const like = await prisma.like.create({
            data: {
                user_id: body.user_id,
                post_id: body.user_id,
            },
            select: {
                user: true,
                post: true,
            },
        })

        res.status(200).send({ like })
    }
}

export default new PostController()
