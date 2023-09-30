import React, { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [Usuario, SetUsuario] = useState();

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, Usuario, SetUsuario }}>
      {children}
    </AdminContext.Provider>
  );
};


export { AdminContext, AdminProvider };


