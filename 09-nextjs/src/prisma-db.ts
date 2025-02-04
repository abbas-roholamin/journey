import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedProducts = async () => {
  const count = await prisma.product.count();

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          description: "Product 1 description",
          qauntity: 2,
          price: 100,
        },
        {
          title: "Product 2",
          description: "Product 2 description",
          qauntity: 1,
          price: 150,
        },
        {
          title: "Product 3",
          description: "Product 3 description",
          qauntity: 10,
          price: 1000,
        },
      ],
    });
  }
};

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const getProduct = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

export const createProduct = async (body: {
  title: string;
  description: string;
  qauntity: number;
}) => {
  return await prisma.product.create({
    data: body,
  });
};

export const updateProduct = async (
  id: number,
  body: {
    title: string;
    description: string;
    qauntity: number;
  }
) => {
  return await prisma.product.update({
    where: { id },
    data: body,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};
