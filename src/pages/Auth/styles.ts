import styled from "styled-components";
import { pallete, palleteOpacity } from "../../styles/StyledComponents";
import { TiArrowBackOutline } from "react-icons/ti";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${pallete.yellow + palleteOpacity.third};
  width: 30%;
  padding: 16px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 10px;
  margin: 8px 0 8px 0;
  border-radius: 2px;
  width: 95%;
  border: none;
  background-color: transparent;
  color: ${pallete.fontColorWhite};
  outline: 1px solid ${pallete.yellow + palleteOpacity.third};
`;

export const Button = styled.button`
  background-color: ${pallete.yellow};
  padding: 8px;
  border: none;
  border-radius: 2px;
  margin: 8px 0 8px 0;
  cursor: pointer;
`;

export const GoBackIcon = styled(TiArrowBackOutline)`
  color: ${pallete.yellow};
`;
