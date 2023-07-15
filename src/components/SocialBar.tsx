import React, { CSSProperties } from "react";
import Button from "./Button";

const items = [
    { url: 'https://github.com/8bitAlex', src: '../img/github_64.png', alt: 'Github icon' },
    { url: 'https://www.linkedin.com/in/8bitalex/', src: '../img/linkedin_64.png', alt: 'LinkedIn icon' },
    { url: 'https://www.twitch.tv/8bitalex', src: '../img/Twitch_64.png', alt: 'Twitch Icon'}
]

type IProps = {
    style: CSSProperties
}

export default function SocialBar(props: IProps) {
    return (
        <div style={props.style}>
            {items.map(({ url, src, alt }) => {
                return <Button style={buttonStyle} onClick={() => { window.open(url, '_newtab'); }}><img src={src} alt={alt} /></Button>
            })}
        </div>
    )
}

const buttonStyle: CSSProperties = {
    display: 'inline-block',
    margin: '4px'
}