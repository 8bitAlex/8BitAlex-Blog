import React from "react";

export default class Button extends React.Component {

    componentDidMount() {
        this.hightlight = new Audio("/sound/hightlight.mp3");
        this.select = new Audio("/sound/select.mp3");
    }

    render() {
        return (
            <div className="button" {...this.props} onMouseOver={() =>  this.hightlight.play()} onClick={() => {this.select.play(); this.props.onClick?.();}}>
                {this.props.children}
            </div>
        );
    }

}