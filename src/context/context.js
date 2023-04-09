import React, { useState } from "react";

import { useSelector } from "react-redux";

const MoneyTransferContext = React.createContext();
const MoneyTransferProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState("");
  const { kassa, foydalanuvchi } = useSelector((store) => store.kassaSlice);
  const [selectedKassa, setSelectedKassa] = useState(-1);
  const kassaItem = selectedKassa !== -1 && kassa[selectedKassa];
  const [selectedUser, setSelectedUser] = useState(-1);
  const userItem = selectedUser !== -1 && foydalanuvchi[selectedUser];

  return (
    <MoneyTransferContext.Provider
      value={{
        inputValue,
        setInputValue,
        time,
        setTime,
        selectedKassa,
        setSelectedKassa,
        kassaItem,
        selectedUser,
        setSelectedUser,
        userItem,
      }}
    >
      {children}
    </MoneyTransferContext.Provider>
  );
};
export { MoneyTransferProvider, MoneyTransferContext };
