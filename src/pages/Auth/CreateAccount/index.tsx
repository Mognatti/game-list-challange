import { Link } from "react-router-dom";
import { CreateAccountProps } from "../../../types";
import * as S from "../styles";

export default function CreateAccount({
  inputs,
  email,
  password,
  passwordConfirmation,
  createUser,
  isLoading,
  setLoginForm,
}: CreateAccountProps) {
  async function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("As senhas não são iguais!");
    } else {
      await createUser({ email, password });
    }
  }

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
              required
            />
          </div>
        ))}
        <S.Button type="submit" onClick={(e) => signIn(e)}>
          Cadastrar
        </S.Button>
      </S.Form>
      {isLoading ? (
        <p>Carregando dados</p>
      ) : (
        <div>
          <p>
            Já possui uma conta?{" "}
            <span
              onClick={() => setLoginForm(true)}
              style={{ cursor: "pointer" }}
            >
              Entrar
            </span>
          </p>
          <Link to="/">
            <S.GoBackIcon size="20" /> Retornar
          </Link>
        </div>
      )}
    </S.Container>
  );
}
