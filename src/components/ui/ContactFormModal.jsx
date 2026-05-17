import SharedContactForm from "./SharedContactForm";

const ContactFormModal = ({ onClose }) => {
  return <SharedContactForm onSuccess={onClose} />;
};

export default ContactFormModal;
