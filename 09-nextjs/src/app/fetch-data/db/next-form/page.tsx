"use client";

import { useActionState } from "react";
import { create, FormState } from "@/actions/product";

export default function CreateProductForm() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(create, initialState);

  return (
    <div className="grid place-content-center h-full ">
      <form action={formAction} className="flex flex-col gap-4 text-black ">
        <label>
          <input type="text" name="title" />
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </label>
        <label>
          <textarea name="description" />
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </label>
        <label>
          <input type="number" name="price" />
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </label>
        <label>
          <input type="number" name="qauntity" />
          {state.errors.qauntity && (
            <p className="text-red-500">{state.errors.qauntity}</p>
          )}
        </label>
        return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
          disabled={isPending}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
