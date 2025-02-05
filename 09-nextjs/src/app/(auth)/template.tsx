"use client";

import Link from "next/link";
import { useState } from "react";

function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ul className="space-x-4 flex items-center ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
      <input
        type="text"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      {children}
    </div>
  );
}

export default Template;
