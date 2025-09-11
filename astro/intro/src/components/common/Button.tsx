import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick} className="bg-sky-400 px-4 py-2 rounded">
      {children} - {count}
    </button>
  );
}
