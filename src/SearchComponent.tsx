import React from "react";
import { TextField } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import {
  Wrapper,
  StyledIconButton,
  SearchContainer,
  StyledButton
} from "./component.style";
import { SearchComponentProps } from "./data.types";

const buttons = ["image", "gif"];

export const SearchComponent = ({
  getSearchTerm,
  getFilterOption
}: SearchComponentProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

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
          {buttons.map(button => (
            <StyledButton key={button} onClick={() => getFilterOption(button)}>
              {button}
            </StyledButton>
          ))}
        </Wrapper>
      </SearchContainer>
    </>
  );
};
