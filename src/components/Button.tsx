'use client'

import { getStorageMute, playSelectSound, zoom } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { CSSProperties, ReactNode } from "react"

type IProps = {
    children?: ReactNode,
    style?: CSSProperties,
    onClick?: () => void,
    onHover?: () => void,
    to?: string,
    mute?: boolean,
    className?: string
}

export default function Button(props: IProps) {
    const router = useRouter()
    return (
        <div className={"button " + props.className} {...props} onMouseOver={() => onHover(props)} onClick={() => onClick(props, router)}>
            {props.children}
        </div>
    )
}

function onHover(props: IProps) {
    const hightlight = new Audio("/sound/hightlight.mp3")
    if(!props.mute && !getStorageMute() && navigator.userActivation.hasBeenActive) hightlight.play()
}

function onClick(props: IProps, router: AppRouterInstance) {
    playSelectSound()
    props.onClick?.()
    if(props.to) {
        zoom(props.to, router)
    }
}