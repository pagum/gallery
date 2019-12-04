import React, { useEffect, useState } from "react";

import { Gallery } from "./Gallery";
import { SearchComponent } from "./SearchComponent";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const getSearchTerm = (value: string) => {
    console.log(value);
    setSearchTerm(value);
  };
  return (
    <>
      <SearchComponent getSearchTerm={getSearchTerm} />
      <Gallery searchTerm={searchTerm} />
    </>
  );
};

export default App;
