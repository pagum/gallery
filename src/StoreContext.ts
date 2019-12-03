import { createContext } from "react";

const initialState = {};

export const StoreContext = createContext<any>(initialState);
export const StoreContextProvider = StoreContext.Provider;

export const StoreContextConsumer = StoreContext.Consumer;
