import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PAGE } from "../pages/IndexPage";

const PrivateRoutes = ({ user, redirectPath = "/" }) => {
  return user ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

const Router = () => {
  const user = useSelector((state) => state.signSlice.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading" element={PAGE.Loading} />
        <Route path="/" element={PAGE.Intro} />
        <Route path="/kakao" element={PAGE.KakaoSign} />
        <Route path="/profile" element={PAGE.SetUserInfo} />
        <Route element={<PrivateRoutes user={user} />}>
          <Route path="/lobby" element={PAGE.Lobby} />
          <Route path="/game/:roomId" element={PAGE.Game} />
        </Route>
        <Route path="/error" element={PAGE.ErrorPage} />
        <Route path="/*" element={PAGE.ErrorPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
