import React from "react";
import Button from "../components/Button";
import { getSound, setSound } from "../utils";

export default class HomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            isMuted: false
        }
    }

    onClick() {
        this.props.onClick();
    }

    toggleSound() {
        this.setState({isMuted:!this.state.isMuted});
        setSound(!this.state.isMuted);
    }

    render() {
        return (
            <div style={style}>
                <h1 style={{paddingTop:'128px', paddingBottom:'48px'}}>Alex Salerno</h1>
                <Button>Blog</Button>

                <Button style={lowerRight} onClick={() => {window.open('https://www.linkedin.com/in/8bitalex/','_newtab');}}>LinkedIn</Button>
                <Button style={lowerLeft} onClick={() => {this.toggleSound()}}>{this.state.isMuted ? '🔉' : '🔇'}</Button>
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