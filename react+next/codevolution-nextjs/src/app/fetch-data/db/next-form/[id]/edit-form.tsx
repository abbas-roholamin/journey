"use client";

import React, { useActionState } from "react";
import { update, FormState } from "@/actions/product";
import { Product } from "@/prisma-db";

export default function EditForm({ product }: { product: Product }) {
    const initialState: FormState = {
        errors: {},
    };

    const updateAction = update.bind(null, product.id)

    const [state, formAction, isPending] = useActionState(updateAction, initialState);

    return (
        <div className="grid place-content-center h-full ">
            <form action={formAction} className="flex flex-col gap-4 text-black ">
                {/* <input type="hidden" name="id" defaultValue={product.id}" /> */}
                <label>
                    <input type="text" name="title" defaultValue={product.title} />
                    {state.errors.title && (
                        <p className="text-red-500">{state.errors.title}</p>
                    )}
                </label>
                <label>
                    <textarea name="description" defaultValue={product.description ?? ''} />
                    {state.errors.description && (
                        <p className="text-red-500">{state.errors.description}</p>
                    )}
                </label>
                <label>
                    <input type="number" name="price" defaultValue={product.price} />
                    {state.errors.price && (
                        <p className="text-red-500">{state.errors.price}</p>
                    )}
                </label>
                <label>
                    <input type="number" name="qauntity" defaultValue={product.qauntity} />
                    {state.errors.qauntity && (
                        <p className="text-red-500">{state.errors.qauntity}</p>
                    )}
                </label>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
                    disabled={isPending}
                >
                    Update
                </button>
            </form>
        </div>
    );
}
