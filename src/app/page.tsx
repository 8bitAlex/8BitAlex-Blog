'use client'

import Button from "@/components/Button";
import { zoom } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect } from "react";
import Analytics from 'react-ga'

const GTAG = "G-LH0F01NP3E"
Analytics.initialize(GTAG)

export default function Page() {
  const router = useRouter()

  // pageview event on component mount
  useEffect(() => {
    Analytics.pageview(window.location.pathname)
  })

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
