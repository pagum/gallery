import React from "react";

import { Gallery } from "./Gallery";
import { SearchComponent } from "./SearchComponent";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [filter, setFilter] = React.useState<string | undefined>(undefined);
  const getSearchTerm = (value: string) => {
    setFilter(undefined);
    setSearchTerm(value);
  };
  const getFilterOption = (value: string) => {
    setFilter(value);
  };
  return (
    <>
      <SearchComponent
        getSearchTerm={getSearchTerm}
        getFilterOption={getFilterOption}
      />
      <Gallery searchTerm={searchTerm} filter={filter} />
    </>
  );
};

export default App;
