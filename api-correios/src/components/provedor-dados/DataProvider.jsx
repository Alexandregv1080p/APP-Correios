import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [senderData, setSenderData] = useState({
    fullname: '',
    cpf: '',
    phone: '',
    email: '',
    address: {
      cep: '',
      state: '',
      uf: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      complement: ''
    }
  });

  const [receiverData, setReceiverData] = useState({
    fullname: '',
    cpf: '',
    phone: '',
    email: '',
    address: {
      cep: '',
      state: '',
      uf: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      complement: ''
    }
  });

  const [packageData, setPackageData] = useState({
    weight: '',
    height: '',
    width: '',
    length: '',
    reverse: false,
    ar: false,
    own_hands: false,
    information: {
      amount: '',
      quantity: '',
      description: ''
    }
  });

  

  return (
    <DataContext.Provider
      value={{
        senderData,
        setSenderData,
        receiverData, 
        setReceiverData,
        packageData,
        setPackageData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
