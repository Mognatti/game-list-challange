import { Link } from "react-router-dom";
import { LoginProps } from "../../../types";
import * as S from "../styles";

export default function Login({
  inputs,
  email,
  password,
  logIn,
  isLoading,
  setLoginForm,
}: LoginProps) {
  async function logInUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    try {
      await logIn({ email, password });
    } catch (error: any) {
      console.log(typeof error);
      const message = error.message;
      alert(message);
    }
  }
  return (
    <S.Container>
      <S.Form>
        <S.Title>Entrar</S.Title>
        <S.InputsDiv>
          {inputs.map((item) => {
            if (item.id !== "password confirmation")
              return (
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
              );
          })}
          <S.Button type="submit" onClick={(e) => logInUser(e)}>
            Entrar
          </S.Button>
        </S.InputsDiv>
      </S.Form>
      {isLoading ? (
        <p>Entrando...</p>
      ) : (
        <div>
          <p>
            Ainda não possui uma conta?{" "}
            <span
              onClick={() => setLoginForm(false)}
              style={{ cursor: "pointer", borderBottom: "1px solid white" }}
            >
              Criar conta
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
