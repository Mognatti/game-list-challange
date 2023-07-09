import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [{ signIn, logIn, isLoading, user }] = useFirebaseAuth();

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      value: email,
      setter: setEmail,
    },
    {
      id: "password",
      label: "Senha",
      type: "password",
      value: password,
      setter: setPassword,
    },
    {
      id: "password confirmation",
      label: "Confirme sua senha",
      type: "password",
      value: passwordConfirmation,
      setter: setPasswordConfirmation,
    },
  ];
  console.log(user);
  if (user) return <Navigate to="/profile" />;
  if (loginForm && !user) {
    return (
      <Login {...{ inputs, email, password, logIn, isLoading, setLoginForm }} />
    );
  }
  if (!loginForm && !user)
    return (
      <CreateAccount
        {...{
          inputs,
          email,
          password,
          passwordConfirmation,
          signIn,
          isLoading,
          setLoginForm,
        }}
      />
    );
}
