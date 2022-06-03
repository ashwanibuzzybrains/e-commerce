import "./index.css";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginFromHere = async () => {
    try {
      const { history } = props;

      const user = await signInWithEmailAndPassword(auth, email, password);
      const jwtToken = user.user.accessToken;

      Cookies.set("jwt_token", jwtToken, {
        expires: 30,
      });
      history.replace("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken !== undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-bg-container">
      <label htmlFor="email">Email</label>
      <input
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        className="input-class"
        type="text"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        className="input-class"
        type="password"
      />
      <button onClick={loginFromHere} className="login-button">
        Login
      </button>
    </div>
  );
};
export default Login;
