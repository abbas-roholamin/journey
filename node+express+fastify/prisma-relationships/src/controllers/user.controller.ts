import { prisma } from '../../prisma.db'

type createDto = {
    email: string
    name: string
    address: string
    age: number
    job: string
}

type updateDto = Partial<createDto>

class UserController {
    public async index(_, res: any) {
        const users = await prisma.user.findMany({
            include: {
                Profile: true,
                Posts: true,
                Likes: true,
            },
        })
        return res.json(users)
    }

    public async create(req: any, res: any) {
        if (!req.body) {
            res.status(400).send({ message: 'Content can not be empty!' })
            return
        }

        const body: createDto = req.body

        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                Profile: {
                    create: {
                        address: body.address,
                        age: body.age,
                        job: body.job,
                    },
                },
            },
            select: {
                email: true,
                name: true,
                Profile: {
                    select: {
                        address: true,
                        age: true,
                        job: true,
                    },
                },
            },
        })

        res.status(201).send({ user })
    }

    public async update(req: any, res: any) {
        const { id } = req.params

        if (!req.body || !id) {
            res.status(400).send({ message: 'Content can not be empty!' })
            return
        }

        const body: updateDto = req.body

        const user = await prisma.user.update({
            where: {
                id: +id,
            },
            data: {
                email: body.email,
                name: body.name,
                Profile: {
                    update: {
                        address: body.address,
                        age: body.age,
                        job: body.job,
                    },
                },
            },
            select: {
                email: true,
                name: true,
                Profile: {
                    select: {
                        address: true,
                        age: true,
                        job: true,
                    },
                },
            },
        })

        res.status(200).send({ user })
    }

    public async delete(req: any, res: any) {
        const { id } = req.params

        if (!id) {
            res.status(400).send({ message: 'ID can not be empty!' })
            return
        }

        const user = await prisma.user.delete({
            where: {
                id: +id,
            },
        })

        res.status(200).send({ user })
    }
}

export default new UserController()
