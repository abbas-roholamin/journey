"use client";

import Image from "next/image";

function Button() {
  const handleClick = async () => {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name: "Abbas" }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Send Email
    </button>
  );
}

export default Button;
