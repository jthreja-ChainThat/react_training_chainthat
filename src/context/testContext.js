import React, { createContext } from "react";

export const testContext = createContext();

const { Consumer, Provider } = testContext;

const TestProvider = ({ children }) => {
  return <Provider value="temp Value">{children}</Provider>;
};

export default TestProvider;
