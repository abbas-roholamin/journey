/** @format */

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-500 text-white px-4 py-2.5 rounded-2xl overflow-hidden "
    >
      {children}
    </button>
  )
}
