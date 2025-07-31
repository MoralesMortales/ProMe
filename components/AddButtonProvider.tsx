import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'

type AddButtonContextType = {
  activate: boolean;
  currentTab: string;
  triggerAddButton: (tabName: string) => void;
};

const AddButtonContext = createContext<AddButtonContextType | undefined>(undefined);

export const AddButtonProvider = ({ children }: { children: React.ReactNode }) => {
const [currentTab, setCurrentTab] = useState('index');
const [activate, setActivate] = useState(false);



  const triggerAddButton = (tabName: string) => {
    setCurrentTab(tabName);
    setActivate(true);
    setTimeout(() => setActivate(false), 2000); // Auto-hide after 2 seconds
  };

  return (
    <AddButtonContext.Provider value={{ activate, currentTab, triggerAddButton }}>
      {children}
    </AddButtonContext.Provider>
  );
};

export const useAddButton = () => {
  const context = useContext(AddButtonContext);
  if (!context) throw new Error('useAddButton must be used within AddButtonProvider');
  return context;
};
