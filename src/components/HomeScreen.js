import React from "react";
import Button from "./Button";

export default class HomeScreen extends React.Component {

    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <Button>
                <p style={style} >Press Start</p>
            </Button>
        );
    }

}

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto'
}