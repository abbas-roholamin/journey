import { LocateState } from '@/components/props-cause-rerender/locale-state'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/012-the-big-re-renders-myth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid gap-10 place-content-center size-full">
      <LocateState />
    </div>
  )
}
