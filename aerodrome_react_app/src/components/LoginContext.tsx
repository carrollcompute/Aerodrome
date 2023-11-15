// LoginContext.tsx

import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => {
    return useContext(LoginContext);
};

export const LoginProvider: React.FC = ({ children }) => {
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
