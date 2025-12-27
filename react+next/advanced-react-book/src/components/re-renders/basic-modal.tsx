/** @format */

import { Button } from './button'

type BasicModalDialogProps = {
  onClose: () => void
}

export const ModalDialog = ({ onClose }: BasicModalDialogProps) => {
  console.log('Model component rendering')

  return (
    <div className="absolute p-4 overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow top-1/2 left-1/2 size-1/2 rounded-2xl">
      <div className="content">modal content</div>
      <div className="footer">
        <Button onClick={onClose}>close dialog</Button>
      </div>
    </div>
  )
}
