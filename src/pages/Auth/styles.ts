import styled from "styled-components";
import {
  pallete,
  palleteOpacity,
  typografy,
} from "../../styles/styleVariables";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 1;
  &::before {
    content: "";
    background-image: url("/images/login_bg.jpg");
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${pallete.yellow + palleteOpacity.third};
  width: 30%;
  padding: 32px 20px;
  background-color: ${pallete.backgroundColorDark};
  border-radius: 15px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 0;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.label``;

export const Input = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: none;
  margin: 8px 0 8px 0;
  color: ${pallete.fontColorWhite};
  background-color: transparent;
  outline: 1px solid ${pallete.yellow + palleteOpacity.third};
  width: 95%;
  &:hover,
  &:focus {
    transition: 250ms;
    box-shadow: 0px 0px 10px 0px ${pallete.yellow}${palleteOpacity.third};
  }
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
  border: none;
  margin: 8px 0 8px 0;
  color: ${pallete.fontColorWhite};
  background-color: transparent;
  outline: 1px solid ${pallete.yellow}${palleteOpacity.third};
  cursor: pointer;
  font-weight: 500;
  font-size: ${typografy.fontSize.regular};
  &:hover {
    transition: 250ms;
    box-shadow: 0px 0px 10px 0px ${pallete.yellow}${palleteOpacity.third};
  }
`;

export const LinkConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LinkToLogin = styled.span`
  text-decoration: underline;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    opacity: 0.7;
  }
`;

export const LinkToCreateAccount = styled.span`
  text-decoration: underline;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    opacity: 0.7;
  }
`;

export const LinkToReturn = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  width: fit-content;
  transition: 350ms;
  text-decoration: underline;
  &:hover {
    opacity: 0.7;
  }
`;
