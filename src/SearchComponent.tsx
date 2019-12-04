import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import { SearchWrapper } from "./component.style";
import { StoreContextProvider } from "./StoreContext";

export const SearchComponent = ({ getSearchTerm }: any) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);
  const onClick = () => getSearchTerm(searchTerm);
  return (
    <>
      <SearchWrapper>
        <TextField
          id="textField"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            )
          }}
        />
        <Button onClick={onClick}>GO!</Button>
      </SearchWrapper>
    </>
  );
};
