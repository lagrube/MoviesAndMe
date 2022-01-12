import React, { useState } from "react";
import Login from "../components/Log/Login";
import Signup from "../components/Log/Signup";
import Logout from "../components/Log/Logout";
import Search from "../components/Search";

const Log = () => {
  const [status, setStatus] = useState("login");

  return (
    <>
      {status === "login" && (
        <>
          <Login changeStatus={(status) => setStatus(status)} />
        </>
      )}
      {status === "signup" && (
        <>
          <Signup changeStatus={(status) => setStatus(status)} />
        </>
      )}
      {status === "home" && (
        <>
          <Logout changeStatus={(status) => setStatus(status)} />
          <Search />
        </>
      )}
    </>
  );
};

export default Log;
