import { ExplicitUpdateParentState } from '@/components/update-parent-state/explicit-update-parent-state'
import { PassChildComponentAsFunction } from '@/components/update-parent-state/pass-childe-components-as-functions'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/011-update-parent-state')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid gap-10 place-content-center size-full">
      <PassChildComponentAsFunction />
      <ExplicitUpdateParentState />
    </div>
  )
}
