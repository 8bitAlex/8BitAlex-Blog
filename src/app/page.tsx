'use client'

import Button from "@/components/Button";
import { zoom } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

export default function Page() {
  const router = useRouter()
  
  return (
    <Button>
      <p style={style} onClick={() => zoom('/home', router)}>Press Start</p>
    </Button>
  )
}

const style: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: 'auto'
}
