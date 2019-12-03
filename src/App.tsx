import React, { useEffect, useState } from "react";

import { StoreContextProvider } from "./StoreContext";
import { Main } from "./Main";

export const StoreContext = React.createContext(null);

export const App: React.FC = () => {
  return (
    <StoreContextProvider value={{}}>
      <Main />
    </StoreContextProvider>
  );
};
