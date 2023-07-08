import { useRef } from "react";
import * as S from "./styles";

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      ref: emailRef,
    },
    {
      id: "password",
      label: "Senha",
      type: "password",
      ref: passwordRef,
    },
    {
      id: "password confirmation",
      label: "Confirme sua senha",
      type: "password",
      ref: passwordConfirmationRef,
    },
  ];

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
            <S.Input type={item.type} ref={item.ref} id={item.id} required />
          </div>
        ))}
        <S.Button type="submit"> Cadastrar </S.Button>
      </S.Form>
      <p>Já possui uma conta? Entrar</p>
    </S.Container>
  );
}
