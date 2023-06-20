import React from "react";
import Button from "./Button";

const items = [
    {url:'https://github.com/8bitAlex', src:'../img/github_64.png', alt:'Github icon'},
    {url:'https://www.linkedin.com/in/8bitalex/', src:'../img/linkedin_64.png', alt:'LinkedIn icon'}
]

export default class SocialBar extends React.Component {

    render() {
        return (
            <div style={{...this.props.style}}>
                {items.map(({url, src, alt}) => {
                    return <Button style={buttonStyle} onClick={() => {window.open(url,'_newtab');}}><img src={src} alt={alt}/></Button>
                })}
            </div>
        );
    }

}

const buttonStyle = {
    display: 'inline-block',
    margin: '4px'
}