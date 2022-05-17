import React, { useContext } from "react";

export interface FetchOptions {
    readonly baseUrl?: string;
}

const initOptions: FetchOptions = {};
const context = React.createContext(initOptions);
const Provider = context.Provider;

export { Provider };

export function useFetchContext() {
    return useContext(context);
}