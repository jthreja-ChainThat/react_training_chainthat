import React, { createContext, useState } from "react";

export const localeContext = createContext();

const { Provider, Consumer } = localeContext;

const LocaleProvider = ({ children }) => {
  const [state, setstate] = useState("en");

  return (
    <Provider
      value={{
        state,
        setstate,
      }}
    >
      {children}
    </Provider>
  );
};

export default LocaleProvider;
