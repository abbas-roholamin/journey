import { ModalDialog } from '@/components/re-renders/basic-modal'
import { Button } from '@/components/re-renders/button'
import {
  BunchOfStuff,
  OtherStuffAlsoComplicated,
} from '@/components/re-renders/muck'
import { VerySlowComponent } from '@/components/re-renders/very-slow-component'
import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react'

export const Route = createFileRoute('/01-re-renders')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid place-content-center size-full">
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  )
}
