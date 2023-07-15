import { useEffect, useRef } from "react";
import * as S from "./styles";

interface AskToLoginModalProps {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
}

export default function AskToLoginModal({
  showModal,
  setShowModal,
}: AskToLoginModalProps) {
  const BackgroundRef = useRef<HTMLDivElement>(null);

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === BackgroundRef.current) {
      setShowModal("false");
    }
  }

  function escPress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setShowModal("false");
    }
  }
  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => escPress(e);
    document.addEventListener("keydown", handleEscPress);
    return () => document.removeEventListener("keydown", handleEscPress);
  }, []);

  return (
    <S.Background
      showmodal={showModal.toString()}
      ref={BackgroundRef}
      onClick={(e) => closeModal(e)}
    >
      <S.ModalContainer showmodal={showModal.toString()}>
        <S.ModalHeader>
          Opa, parece que você não está logado no momento!
        </S.ModalHeader>
        <S.ModalContent>
          <p>Você precisa estar logado para acessar algumas funções</p>
          <S.ModalActionsDiv>
            <S.ModalLink to="/auth">
              <S.ModalButton>Entrar</S.ModalButton>
            </S.ModalLink>
            <S.ModalButton onClick={() => setShowModal("false")}>
              Talvez depois...
            </S.ModalButton>
          </S.ModalActionsDiv>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Background>
  );
}
