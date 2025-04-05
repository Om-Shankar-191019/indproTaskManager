import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import View from "./pages/View";
import Summary from "./pages/Summary";
import HomeLayout from "./pages/HomeLayout";

const App = () => {
  const { authUser } = useAuthContext();
  const [tokenExpiryExist, setTokenExpiryExist] = useState(false);

  useEffect(() => {
    if (authUser) {
      const expirationTime = new Date(authUser.tokenExpirationDate).getTime();
      const currentTime = Date.now();
      setTokenExpiryExist(expirationTime > currentTime);
    }
  }, [authUser]);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            authUser && tokenExpiryExist ? <Navigate to="/" /> : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            authUser && tokenExpiryExist ? <Navigate to="/" /> : <Signup />
          }
        />

        <Route
          path="/"
          element={
            authUser && tokenExpiryExist ? (
              <HomeLayout />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<Home />} />
          <Route path="view" element={<View />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
