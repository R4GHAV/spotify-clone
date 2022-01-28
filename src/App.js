import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenResponse } from "./spotify";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenResponse();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">{token ? <h1>Login Successful</h1> : <Login />}</div>
  );
}

export default App;
