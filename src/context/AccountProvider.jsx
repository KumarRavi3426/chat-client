import { createContext, useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();

  // Initialize account from localStorage if available

  // const [account, setAccount] = useState(() => {
  //     const stored = localStorage.getItem('account');
  //     return stored ? JSON.parse(stored) : undefined;
  // });

  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  // socket part
  const socket = useRef();

  useEffect(() => {
    socket.current = io(import.meta.env.VITE_SOCKET_URL || "ws://localhost:9000");
  }, []);

  // Sync account to localStorage whenever it changes
  // useEffect(() => {
  //     if (account !== undefined) {
  //         localStorage.setItem('account', JSON.stringify(account));
  //     }
  // }, [account]);

  return (
    // what we give inside value, can be exported from the context
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
