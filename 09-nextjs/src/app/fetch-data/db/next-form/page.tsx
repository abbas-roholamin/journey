import Submit from "@/app/components/Submit";
import { createProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function CreateProductForm() {
  async function create(formData: FormData) {
    "use server";
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: parseInt(formData.get("price") as string),
      qauntity: parseInt(formData.get("qauntity") as string),
    };

    await createProduct(data);
    redirect("/fetch-data/db");
  }

  return (
    <div className="grid place-content-center h-full ">
      <form action={create} className="flex flex-col gap-4 text-black ">
        <label>
          <input type="text" name="title" />
        </label>
        <label>
          <textarea name="description" />
        </label>
        <label>
          <input type="number" name="price" />
        </label>
        <label>
          <input type="number" name="qauntity" />
        </label>
        <Submit />
      </form>
    </div>
  );
}
