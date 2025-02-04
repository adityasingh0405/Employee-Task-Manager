import React, { useState, createContext, useEffect } from 'react';
import { getstorage, setstorage } from '../utils/localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    
    setstorage()
      const { employees, admin } = getstorage();
      setUserdata({ employees, admin });
    
  }, []);

  return (
    <AuthContext.Provider value={ userdata }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 
 
