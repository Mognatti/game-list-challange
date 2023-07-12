import * as S from "./styles";

interface AskToLoginModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AskToLoginModal({
  showModal,
  setShowModal,
}: AskToLoginModalProps) {
  return (
    <S.Background showModal={showModal}>
      <S.ModalContainer showModal={showModal}>
        <S.ModalHeader>
          Opa, parece que você não está logado no momento!
        </S.ModalHeader>
        <S.ModalContent>
          <p>Você precisa estar logado para acessar algumas funções</p>
          <S.ModalActionsDiv>
            <S.ModalLink to="/auth">
              <S.ModalButton>Entrar</S.ModalButton>
            </S.ModalLink>
            <S.ModalButton onClick={() => setShowModal(false)}>
              Talvez depois...
            </S.ModalButton>
          </S.ModalActionsDiv>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Background>
  );
}
