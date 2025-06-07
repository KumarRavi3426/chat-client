import { createContext, useState, useEffect } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    // Initialize account from localStorage if available
    const [account, setAccount] = useState(() => {
        const stored = localStorage.getItem('account');
        return stored ? JSON.parse(stored) : undefined;
    });

    const [person, setPerson] = useState({});


    // Sync account to localStorage whenever it changes
    useEffect(() => {
        if (account !== undefined) {
            localStorage.setItem('account', JSON.stringify(account));
        }
    }, [account]);

    return (
        // what we give inside value, can be exported from the context
        <AccountContext.Provider value={{ account, setAccount, person, setPerson }}>   
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;