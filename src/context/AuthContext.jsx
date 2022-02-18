import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AppContext.Provider value={{ handleToken, token }}>
      {children}
    </AppContext.Provider>
  );
};
