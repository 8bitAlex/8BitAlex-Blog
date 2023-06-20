import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import HomePage from "./routes/HomePage";
import PressStartPage from "./routes/PressStartPage";
import BlogPage from "./routes/BlogPage";
import PageNotFound from "./routes/PageNotFound";

// Router Top-Level Layout
function Layout() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  );
}

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<PressStartPage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/blog"} element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    );
  }

}

export default function AppFunc() {
  const navigate = useNavigate();
  return <App navigate={navigate} />
}
