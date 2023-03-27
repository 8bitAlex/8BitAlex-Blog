import React from "react";
import Button from "../components/Button";

export default class HomeScreen extends React.Component {

    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <div style={style}>
                <h1 style={{paddingTop:'128px', paddingBottom:'48px'}}>Alex Salerno</h1>
                <Button>Blog</Button>
            </div>
        );
    }

}

const style = {
    padding: '16px'
}