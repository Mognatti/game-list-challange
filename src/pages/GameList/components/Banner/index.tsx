import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";

export default function Banner() {
  const [{ user }] = useFirebaseAuth();
  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
        <div>
          Bem vindo,{" "}
          {user
            ? user?.email
            : "faça login ou cadastre para acessar todas os recursos!"}{" "}
        </div>
        <div>
          <p>
            Para navegar pelo site, basta clicar na sua imagem no canto superior
            direito
          </p>
          <p>
            Aos favoritar algum jogo, ele ficará salvo na sua conta e você
            poderá acessá-lo tanto na sua lista, através do filto 'Favoritos
            ❤️', quanto pelo seu perfil
          </p>
        </div>
      </div>
    </section>
  );
}
