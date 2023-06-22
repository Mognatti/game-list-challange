import { styled } from "styled-components";

export const GameList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
  list-style: none;
`;

export const DrawerDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
`;

export const GameItem = styled.li`
  padding: 16px;
`;
