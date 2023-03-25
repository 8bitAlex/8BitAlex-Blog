import React from "react";
import HomeScreen from "./components/HomeScreen";
import PressStart from "./components/PressStart";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zoom: false,
      screen: "start"
    }
  }

  zoom() {
    this.setState({zoom: true});
    setTimeout(() => {
      this.setState({zoom:false});
    }, 500);
  }

  render() {
    return (
      <div className={this.state.zoom ? "App zoom" : "App"}>
        { this.state.screen === "start" ? <PressStart onClick={() => {this.setState({screen:"home"}); this.zoom();}} /> : null }
        { this.state.screen === "home" && !this.state.zoom ? <HomeScreen /> : null }
      </div>
    );
  }

}
