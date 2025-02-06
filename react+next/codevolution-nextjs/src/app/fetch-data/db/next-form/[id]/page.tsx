

import { getProduct } from "@/prisma-db";
import EditForm from "./edit-form";
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const product = await getProduct(Number(id));


    if (!product) notFound()

    return (
        <div className="grid place-content-center h-full ">
            <EditForm product={product} />
        </div>
    );
}
