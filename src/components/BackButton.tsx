'use client'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, Children, ReactNode } from "react"
import Button from "./Button";

type IProps = {
    children?: ReactNode,
    onClick?: () => void,
    onHover?: () => void,
    to?: string,
    mute?: boolean,
    className?: string,
    style?: CSSProperties
}

export default function BackButton(props: IProps) {
    return (
        <div style={props.style}>
            <Button to={props.to} style={style} mute><FontAwesomeIcon style={{ height: '16px', verticalAlign: 'middle', paddingBottom: '2px' }} icon={faArrowLeft} /> {props.children}</Button>
        </div>
    )
}

const style: CSSProperties = {
    margin: 0,
    fontFamily: 'Munro',
    color: 'var(--pixel-green)'
}