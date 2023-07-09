import { useState } from "react";
import * as S from "./styles";
import { Navigate } from "react-router-dom";
import useLoggedIn from "../../hooks/useLoggedIn";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [{ signIn, isCreating, user }] = useLoggedIn();

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

  async function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("As senhas não são iguais!");
    } else {
      await signIn({ email, password });
    }
  }
  if (user) return <Navigate to="/profile" />;
  return (
    <S.Container>
      <S.Form>
        <S.Title>Cadastre-se</S.Title>
        <p>
          Ao realizar o cadastro, você poderá salvar os seus jogos favoritos e
          ainda poderá avalia-los!
        </p>
        {inputs.map((item) => (
          <div key={item.id}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <br />
            <S.Input
              type={item.type}
              value={item.value}
              id={item.id}
              onChange={(e) => item.setter(e.target.value)}
              // required
            />
          </div>
        ))}
        <S.Button type="submit" onClick={(e) => handleClick(e)}>
          Cadastrar
        </S.Button>
      </S.Form>
      {isCreating ? (
        <p>Carregando dados</p>
      ) : (
        <p>Já possui uma conta? Entrar</p>
      )}
    </S.Container>
  );
}
