import React from "react";
import PressStart from "../components/PressStart";
import { zoom } from "../utils";
import withHooks from "../components/withHooks"

class HomeScreen extends React.Component {

    render() {
        return (
            <div style={style}>
                <PressStart onClick={() => {zoom('/home', this.props.navigate)}} />
            </div>
        );
    }

}

export default withHooks(HomeScreen);

const style = {
    padding: '16px'
}