import { pallete } from "../../../styles/styleVariables";
import { AccountInfo } from "../../../types";
import * as S from "../styles";
import { MoonLoader } from "react-spinners";

export default function CreateAccount({
  inputs,
  email,
  nickname,
  password,
  passwordConfirmation,
  createUser,
  isLoginLoading,
  setLoginForm,
}: AccountInfo) {
  async function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("As senhas não são iguais!");
    } else {
      await createUser({ email, nickname, password });
    }
  }

  return (
    <S.Container>
      <S.Form>
        <S.Title>Cadastro</S.Title>
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
          {isLoginLoading ? (
            <MoonLoader size="20px" color={pallete.yellow} />
          ) : (
            "Cadastrar"
          )}
        </S.Button>
      </S.Form>
      <S.LinkConteiner>
        <p>
          Já possui uma conta?{" "}
          <S.LinkToLogin onClick={() => setLoginForm(true)}>
            Entrar
          </S.LinkToLogin>
        </p>
        <S.LinkToReturn to="/">Cancelar</S.LinkToReturn>
      </S.LinkConteiner>
    </S.Container>
  );
}
