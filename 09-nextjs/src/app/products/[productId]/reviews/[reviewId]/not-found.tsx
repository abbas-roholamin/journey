
'use client'

import { usePathname } from "next/navigation"

function Page() {
   const path = usePathname()
   const id = path.split('/').pop()
   
    return (
      <div>Review {id} Not Fount Page</div>
    )
  }
  
  export default Page