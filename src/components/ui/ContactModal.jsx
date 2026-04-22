import { useEffect } from "react";

import { createPortal } from "react-dom";
import ContactFormModal from "./ContactFormModal.jsx";
import { useModal } from "../../contexts/ModalContext";

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useModal();
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeContactModal();
    };
    if (isContactModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isContactModalOpen, closeContactModal]);

  if (!isContactModalOpen) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={closeContactModal}
      />
      {/* Modal */}
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto max-h-[90vh] overflow-y-auto pointer-events-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 animate-in slide-in-from-bottom-4 duration-300 fade-in zoom-in min-h-[450px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-8 relative">
            <button
              className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-gray-900 p-2 rounded-full hover:bg-gray-200/50 transition-all duration-200 cursor-pointer"
              onClick={closeContactModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-[#283618] mb-2 text-center">
              Get Free Consultation
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Tell us about your project
            </p>
            <ContactFormModal onClose={closeContactModal} />
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ContactModal;
