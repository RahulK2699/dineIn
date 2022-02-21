import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [len, setLength] = useState(0);

  const handleToken = (newToken) => {
    setToken(newToken);
  };

  const handleLength = (inputLength) => {
    setLength(inputLength);
  };
  console.log(len);

  return (
    <AppContext.Provider value={{ handleToken, token, handleLength, len }}>
      {children}
    </AppContext.Provider>
  );
};
