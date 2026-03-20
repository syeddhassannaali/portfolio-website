"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type ModalsContextType = {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;

  isConversationModalOpen: boolean;
  openConversationModal: () => void;
  closeConversationModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isConversationModalOpen, setIsConversationModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openConversationModal = () => setIsConversationModalOpen(true);
  const closeConversationModal = () => setIsConversationModalOpen(false);

  return (
    <ModalsContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        isConversationModalOpen,
        openConversationModal,
        closeConversationModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalsContext);

  if (!context) {
    throw new Error("useModals must be used inside ModalsProvider");
  }

  return context;
};
