import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Redirect } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpFromHere = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  };
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
      <button onClick={SignUpFromHere} className="login-button">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
