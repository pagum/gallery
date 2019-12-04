import React, { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Checkbox
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import {
  Wrapper,
  StyledIconButton,
  SearchContainer,
  StyledButton
} from "./component.style";
import { StoreContextProvider } from "./StoreContext";

export const SearchComponent = ({ getSearchTerm }: any) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // const handleChangeCheckbox = (name: string) => (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setState({ ...state, [name]: event.target.checked });
  // };
  const handleChangeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);
  const onEvent = () => getSearchTerm(searchTerm);
  const isSearchTermValid = searchTerm && searchTerm.length >= 3;
  const shortSearchTermMessage = "Search term is too short";
  return (
    <>
      <SearchContainer>
        <Wrapper>
          <TextField
            error={!!searchTerm && !isSearchTermValid}
            id="textField"
            label="Search"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            onKeyPress={event => {
              isSearchTermValid && event.key === "Enter" && onEvent();
            }}
            helperText={
              searchTerm && !isSearchTermValid && shortSearchTermMessage
            }
          />

          <StyledIconButton
            onClick={onEvent}
            aria-label="search"
            disabled={!isSearchTermValid}
          >
            <Search />
          </StyledIconButton>
        </Wrapper>
        <Wrapper>
          <StyledButton>image</StyledButton>

          <StyledButton>Gif</StyledButton>
        </Wrapper>
      </SearchContainer>
    </>
  );
};
