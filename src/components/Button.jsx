import React from "react";
import { getSound, zoom } from "../utils";
import withHooks from "./withHooks";

class Button extends React.Component {

    componentDidMount() {
        this.hightlight = new Audio("/sound/hightlight.mp3");
        this.select = new Audio("/sound/select.mp3");
    }

    onHover() {
        if(getSound() && navigator.userActivation.hasBeenActive) this.hightlight.play();
    }

    onClick() {
        if(getSound() && navigator.userActivation.hasBeenActive) this.select.play(); 
        this.props.onClick?.();
        if(this.props.to) {
            zoom(this.props.to, this.props.navigate)
        }
    }

    render() {
        return (
            <div className="button" {...this.props} onMouseOver={() => {this.onHover()}} onClick={() => {this.onClick()}}>
                {this.props.children}
            </div>
        );
    }

}

export default withHooks(Button);