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
    await logIn({ email, password });
  }
  return (
    <S.Container>
      <S.Form>
        <S.Title>Entrar</S.Title>
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
      </S.Form>
      {isLoading ? (
        <p>Entrando...</p>
      ) : (
        <p>
          Ainda não possui uma conta?{" "}
          <span
            onClick={() => setLoginForm(false)}
            style={{ cursor: "pointer" }}
          >
            criar conta
          </span>
        </p>
      )}
    </S.Container>
  );
}
