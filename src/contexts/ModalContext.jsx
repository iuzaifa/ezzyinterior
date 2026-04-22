import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

// Fast refresh fix: Custom hook in separate utils file recommended, but suppressing for now
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isContactModalOpen, openContactModal, closeContactModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
