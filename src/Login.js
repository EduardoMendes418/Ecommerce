import React, { useState } from "react";
import "./Login.css";
import logoImg from "../src/Image/login__logo__black.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*************** LOGAR ************* */
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //success Sing IN Page email and
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //some fancy firebase login shittttttttt...
  };

  /*************** REGISTRAR ************* */
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //success create email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //some fancy firebase register shittttttttt...
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="Login_logo" src={logoImg} alt="Duzon_logo" />
      </Link>
      <div className="login__Container">
        <h1>Sing-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button onClick={register} className="login__registerButton">
            Create you Duzon accont
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
