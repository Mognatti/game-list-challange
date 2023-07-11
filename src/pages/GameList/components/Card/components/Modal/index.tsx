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
      <S.ModalContainer>
        <S.ModalHeader>
          Opa, parece que você não está logado no momento!
        </S.ModalHeader>
        <S.ModalContent>
          Para avaliar e favoritar os jogos, crie uma conta, é grátis!
          <S.ModalActionsDiv>
            <S.ModalLink to="/auth">
              <S.ModalButton>Criar conta</S.ModalButton>
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
