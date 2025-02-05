"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProductForm() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
    qauntity: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(data);

    const res = await fetch("react-form/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/fetch-data/db");
    }
  };

  return (
    <div className="grid place-content-center h-full ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black ">
        <label>
          <input
            type="text"
            name="name"
            value={data.title}
            onChange={(e) => {
              setData({
                ...data,
                title: e.target.value,
              });
            }}
          />
        </label>
        <label>
          <textarea
            name="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </label>
        <label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={(e) =>
              setData({ ...data, price: parseInt(e.target.value) })
            }
          />
        </label>
        <label>
          <input
            type="number"
            name="qauntity"
            value={data.qauntity}
            onChange={(e) =>
              setData({ ...data, qauntity: parseInt(e.target.value) })
            }
          />
        </label>
        <button
          type="submit"
          className="p-4 rounded bg-white text-black disabled:animate-pulse"
          disabled={loading}
        >
          Create
        </button>
      </form>
    </div>
  );
}
