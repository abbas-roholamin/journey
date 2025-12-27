import { useState } from 'react'

interface RenderProps {
  increment: () => void
}

type RenderFn = ({ increment }: RenderProps) => React.ReactNode

interface ParentProps {
  render: RenderFn
}

function Parent({ render }: ParentProps) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  console.log('Parent')

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow rounded-2xl">
        {render({ increment })}

        <div className="text-lg font-medium text-center text-gray-700">
          {count} number
        </div>
      </div>
    </div>
  )
}

export function ExplicitUpdateParentState() {
  return (
    <Parent
      render={({ increment }) => {
        console.log('Child')

        return (
          <button
            onClick={increment}
            className="w-full px-4 py-2 font-semibold text-white transition rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95"
          >
            Increment
          </button>
        )
      }}
    />
  )
}
