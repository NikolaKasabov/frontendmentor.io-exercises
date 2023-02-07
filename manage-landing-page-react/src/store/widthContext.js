import { createContext, useState } from 'react';


export const widthContext = createContext({
  width: 0,
  setWidth: () => { },
});

function ContextProvider({ children }) {
  const [width, setWidth] = useState(0);

  return (
    <widthContext.Provider value={{ width, setWidth }}>
      {children}
    </widthContext.Provider>
  );
}

export default ContextProvider;
