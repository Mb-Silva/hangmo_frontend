import React, { createContext, useState, useContext } from 'react';

// Create a context for the authentication state
const AuthContext = createContext();

// Create a provider component that holds the authentication state
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = () => setIsAuthenticated(true);
  const logOut = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook that lets components use the authentication state
export function useAuth() {
  return useContext(AuthContext);
}