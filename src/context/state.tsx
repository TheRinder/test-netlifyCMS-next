import * as React from 'react';
import { createContext, FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';

import router from 'next/router';


interface IPageContext {
 lang: string,
 country: string,
 setGCountry: (value: string) => void,
 setGLang: (value: string) => void,
}

const defaultValue: IPageContext = {
 lang: '',
 country: '',
 setGCountry: () => { },
 setGLang: () => { },
};

interface IGlobalAuthContextProviderProps {
 children: React.ReactNode;
}

const PageContext = createContext<IPageContext>(defaultValue);

export const GlobalContextProvider: FunctionComponent<IGlobalAuthContextProviderProps> = ({ children }) => {
 const [lang, setLang] = useState<string>("");
 const [country, setCountry] = useState<string>("");

 const setGCountry = useCallback(async (value: string) => {
  setCountry(value)
 }, []);

 const setGLang = useCallback(async (value: string) => {
  setLang(value)
 }, []);

 return (
  <PageContext.Provider
   value={{
    lang,
    country,
    setGCountry,
    setGLang
   }}
  >
   {children}
  </PageContext.Provider>
 );
};

export const usePageContext = (): IPageContext => useContext(PageContext);
