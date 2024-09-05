import React, { createContext, useState } from 'react';

export  const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [navPath, setNavPath] = useState("projects");

  return (
    <MyContext.Provider value={{ setNavPath, navPath }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;