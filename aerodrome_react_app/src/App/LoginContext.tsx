// LoginContext.tsx

import React, { createContext, useContext, useState } from 'react';

export const LoginContext = createContext({ isLoggedIn: false, toggleLogin: () => {} });

export const useLogin = () => {
    return useContext(LoginContext);
};

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    );
};
