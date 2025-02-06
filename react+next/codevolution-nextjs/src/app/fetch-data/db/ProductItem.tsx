"use client";
import { Product } from "@/prisma-db";
import Link from "next/link";
import { remove } from "@/actions/product";
import { useOptimistic } from "react";

export default function ProductItem({
    products,
}: {
    products: Product[];
}) {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (initProduct, id) => {
        return initProduct.filter((product) => product.id !== id);
    })

    const removePorudct = async (id: number) => {
        setOptimisticProducts(id);
        await remove(id);
    }

    return (
        <div>
            <div className="flex  p-4 gap-4">
                <Link href="/fetch-data/db/next-form" className="underline">New Product</Link>
                <Link href="/fetch-data/db/next-form?seed=true" className="underline">Seed</Link>
            </div>
            <ul className="space-y-4 p-4">
                {optimisticProducts.map((product) => (
                    <li key={product.id} className=" bg-white text-black p-4 rounded  flex items-center justify-between">
                        <Link href={`/fetch-data/db/next-form/${product.id}`}>
                            {product.title} - {product.description}
                        </Link>

                        <form action={removePorudct.bind(null, product.id)}>
                            <button type="submit" className="text-red-400">Delete</button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    );
}
