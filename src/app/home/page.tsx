'use client'

import Button from "@/components/Button"
import SocialBar from "@/components/SocialBar"
import { getStorageMute, setStorageMute } from "@/lib/utils"
import { CSSProperties, useState, useEffect } from "react"

const menuItems = [
    { title: 'Blog', url: '/blog' },
    { title: 'Alderman RPG', url: 'https://aldermanrpg.com/'},
    { title: 'Pixelated Realms Podcast', url: 'https://www.pixelatedrealms.org/'},
    { title: 'Code Examples', url: 'https://github.com/8bitAlex/alex-salerno-portfolio'}
]

export default function Page() {
    const [mute, setMute] = useState(false)

    useEffect(() => {
        setMute(getStorageMute())
    }, [setMute])

    function onClick() {
        setStorageMute(!mute)
        setMute(!mute)
    }

    return (
        <div style={style}>
            <h1 style={{ paddingTop: '128px', paddingBottom: '24px' }}>Alex Salerno</h1>
            <div className="window">
                {menuItems.map(({ title, url }) => {
                    return <div className="window-item"><Button to={url}><p>{title}</p></Button></div>
                })}
            </div>
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