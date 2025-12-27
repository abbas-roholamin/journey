import { useState, type Dispatch, type SetStateAction } from 'react'

export function PassChildComponentAsFunction() {
  const [message, setMessage] = useState('Hello')
  console.log('Parent')

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow rounded-2xl">
        <h1 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          {message}
        </h1>

        <Child onChangeMessage={setMessage} />
      </div>
    </div>
  )
}

function Child({
  onChangeMessage,
}: {
  onChangeMessage: Dispatch<SetStateAction<string>>
}) {
  console.log('Childe')
  return (
    <div className="flex justify-center">
      <button
        onClick={() =>
          onChangeMessage('Message updated from Child!' + Math.random())
        }
        className="px-4 py-2 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95"
      >
        Update message
      </button>
    </div>
  )
}
