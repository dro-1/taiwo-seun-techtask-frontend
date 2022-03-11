import React, { createContext, useState } from "react";

export const BotsContext = createContext({
  bots: null,
  setBots: () => null,
});

const BotsProvider = ({ children }) => {
  const [bots, setBots] = useState(null);

  return (
    <BotsContext.Provider
      value={{
        bots,
        setBots,
      }}
    >
      {children}
    </BotsContext.Provider>
  );
};
export default BotsProvider;
