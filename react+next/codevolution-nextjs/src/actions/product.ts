"use server";

import { createProduct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Error = {
  title?: string;
  description?: string;
  price?: string;
  qauntity?: string;
};

export type FormState = {
  errors: Error;
};

export async function create(prevState: FormState, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: parseInt(formData.get("price") as string),
    qauntity: parseInt(formData.get("qauntity") as string),
  };

  const errors: Error = {};

  if (data.title === "") errors.title = "Title is required";
  if (data.description === "") errors.description = "Description is required";
  if (data.price === 0) errors.price = "Price is required";
  if (data.qauntity === 0) errors.qauntity = "Quantity is required";

  if (Object.keys(errors).length > 0) return { errors };

  await createProduct(data);
  redirect("/fetch-data/db");
}


export async function update(id: number, prevState: FormState, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: parseInt(formData.get("price") as string),
    qauntity: parseInt(formData.get("qauntity") as string),
  };

  const errors: Error = {};

  if (data.title === "") errors.title = "Title is required";
  if (data.description === "") errors.description = "Description is required";
  if (data.price === 0) errors.price = "Price is required";
  if (data.qauntity === 0) errors.qauntity = "Quantity is required";

  if (Object.keys(errors).length > 0) return { errors };

  await updateProduct(id, data);
  redirect("/fetch-data/db");
}


export async function remove(id: number) {
  if (id === 1) {
    await new Promise((resolve, reject) => setTimeout(reject, 4000));
  }

  await new Promise((resolve) => setTimeout(resolve, 4000));
  await deleteProduct(id);
  revalidatePath("/fetch-data/db");
}
