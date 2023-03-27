import React from "react";
import HomeScreen from "./routes/HomeScreen";
import PressStartScreen from "./routes/PressStartScreen";
import { Outlet, Route, Routes, useNavigate } from "react-router";

// Router Top-Level Layout
function Layout() {
  return (
      <div className='content'>
        <Outlet />
      </div>
  );
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zoom: false
    }
  }

  zoom(screen) {
    this.setState({zoom:true});
    setTimeout(() => {
      this.setState({zoom:false});
      this.props.navigate(screen);
    }, 500);
  }

  render() {
    return (
      <div className={this.state.zoom ? "App zoom" : "App"}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<PressStartScreen onClick={() => {this.zoom("/home")}} />} />
            <Route path={"/home"} element={<HomeScreen />} />
            <Route path="*" element={<div>Nothing Here</div>} />
          </Route>
        </Routes>
        {/* {this.state.screen === "start" ? <PressStart onClick={() => { this.setState({ screen: "home" }); this.zoom(); }} /> : null}
        {this.state.screen === "home" && !this.state.zoom ? <HomeScreen /> : null} */}
      </div>
    );
  }

}

export default function AppFunc() {
  const navigate = useNavigate();
  return <App navigate={navigate} />
}
