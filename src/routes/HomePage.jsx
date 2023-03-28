import React from "react";
import Button from "../components/Button";
import { getSound, setSound } from "../utils";

export default class HomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            hasSound: getSound()
        }
    }

    onClick() {
        this.props.onClick();
    }

    toggleSound() {
        const hasSound = this.state.hasSound;
        setSound(!hasSound);
        this.setState({hasSound:!hasSound});
    }

    render() {
        return (
            <div style={style}>
                <h1 style={{paddingTop:'128px', paddingBottom:'48px'}}>Alex Salerno</h1>
                <Button onClick={() => {window.location.assign('https://blog.alexsalerno.com')}}>Blog</Button>

                <Button style={lowerRight} onClick={() => {window.open('https://www.linkedin.com/in/8bitalex/','_newtab');}}>LinkedIn</Button>
                <Button style={lowerLeft} onClick={() => {this.toggleSound()}}><img src={this.state.hasSound ? '../img/Speaker.png' : '../img/SpeakerMuted.png'} width='64px' height='64px' alt={this.state.hasSound ? "Speaker Icon" : "Muted Speaker Icon"}/></Button>
            </div>
        );
    }

}

const style = {
    padding: '16px'
}

const lowerRight = {
    position: 'fixed',
    right: '32px',
    bottom: '32px'
}

const lowerLeft = {
    position: 'fixed',
    left: '32px',
    bottom: '32px'
}