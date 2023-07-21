'use client'

import Button from "@/components/Button"
import SocialBar from "@/components/SocialBar"
import { setStorageMute } from "@/lib/utils"
import { CSSProperties, Dispatch, SetStateAction, useState } from "react"

const menuItems = [
    { title: 'Blog', url: '/blog' },
    { title: 'Code Examples', url: 'https://github.com/8bitAlex/alex-salerno-portfolio'},
    { title: 'Alderman RPG', url: 'https://aldermanrpg.com/'},
    { title: 'Pixelated Realms Podcast', url: 'https://www.pixelatedrealms.org/'}
]

export default function Page() {
    const [mute, setMute] = useState(false)

    function onClick() {
        setStorageMute(!mute)
        setMute(!mute)
    }

    return (
        <div style={style}>
            <h1 style={{ paddingTop: '128px', paddingBottom: '24px' }}>Alex Salerno</h1>
            {menuItems.map(({ title, url }) => {
                return <Button to={url}><p>{title}</p></Button>
            })}
            <SocialBar style={lowerRight} />
            <Button style={lowerLeft} onClick={() => onClick()}><img src={!mute ? '../img/Speaker.png' : '../img/SpeakerMuted.png'} alt={!mute ? "Speaker Icon" : "Muted Speaker Icon"} /></Button>
        </div>
    )
}

const style: CSSProperties = {
    padding: '16px',
    paddingBottom: '96px'
}

const lowerRight: CSSProperties = {
    position: 'fixed',
    right: '32px',
    bottom: '32px'
}

const lowerLeft: CSSProperties = {
    position: 'fixed',
    left: '32px',
    bottom: '32px'
}