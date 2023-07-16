import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [{ createUser, logIn, isLoginLoading, user }] = useFirebaseAuth();
  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      value: email,
      setter: setEmail,
    },
    {
      id: "nick",
      label: "Apelido",
      type: "text",
      value: nickname,
      setter: setNickname,
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

  if (user) return <Navigate to="/profile" />;
  if (loginForm && !user) {
    return (
      <Login
        {...{
          inputs,
          email,
          password,
          logIn,
          isLoginLoading,
          setLoginForm,
        }}
      />
    );
  }
  if (!loginForm && !user)
    return (
      <CreateAccount
        {...{
          inputs,
          email,
          nickname,
          password,
          passwordConfirmation,
          createUser,
          isLoginLoading,
          setLoginForm,
        }}
      />
    );
}
