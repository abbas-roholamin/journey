import { ModalDialog } from '../re-renders/basic-modal'
import { Button } from '../re-renders/button'

export function LocateState() {
  let isOpen = false

  return (
    <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow rounded-2xl">
      <h1>Local state</h1>
      <Button onClick={() => (isOpen = true)}>Open dialog</Button>
      {isOpen ? <ModalDialog onClose={() => (isOpen = false)} /> : null}
    </div>
  )
}
