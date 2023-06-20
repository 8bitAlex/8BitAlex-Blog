import React from "react";
import Button from "../components/Button";
import SocialBar from "../components/SocialBar";
import { getSound, setSound } from "../utils";
import { Link } from "react-router-dom";
import withHooks from "../components/withHooks";

const menuItems = [
    {title:'Blog', url: '/blog'}
]

class HomeScreen extends React.Component {

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
                {menuItems.map(({title, url}) => {
                    return <Button to={url}><p>{title}</p></Button>
                })}
                
                <SocialBar style={lowerRight} />
                <Button style={lowerLeft} onClick={() => {this.toggleSound()}}><img src={this.state.hasSound ? '../img/Speaker.png' : '../img/SpeakerMuted.png'} alt={this.state.hasSound ? "Speaker Icon" : "Muted Speaker Icon"}/></Button>
            </div>
        );
    }

}

export default withHooks(HomeScreen);

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