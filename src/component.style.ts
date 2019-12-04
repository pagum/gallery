import styled from "styled-components";
import { IconButton, Button } from "@material-ui/core";

export const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1%;
  align-items: stretch;
  width: 100%;
  height: 20%;
  background: #274069;
  min-height: 100px;
  box-shadow: 0 2px 9px #888888;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  justify-content: flex-end;
  @media (max-width: 500px) {
    justify-content: center;
    padding: 0 10px;
  }
`;
export const StyledImage = styled.img`
  min-height: 300px;
  padding: 10px;
  width: 95% !important;

  @media (min-width: 580px) {
    width: 45% !important;
    max-height: 380px !important;
  }
  @media (min-width: 920px) {
    width: 30% !important;
  }
  @media (min-width: 1100px) {
    width: 23% !important;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const GalleryContainer = styled.div`
  isplay: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 730px) {
    flex-wrap: wrap;
  }
`;
export const StyledIconButton = styled(IconButton)`
  height: 50px;
  align-self: center;
`;

export const StyledButton = styled(Button)`
  height: 50px;
  padding: 0 10px;
  align-self: center;
`;

export const GalleryMessage = styled.div`
  color: palevioletred;
  font-size: larger;
  font-weight: 600;
  text-align: center;
`;

export const ImagesWrapper = styled.div``;
