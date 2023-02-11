import { useState } from "react";

import { motion } from "framer-motion";

import { ModalSeverity } from "./types";

import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";
import ContactPhotos from "./ContactPhotos";
import Modal from "./Modal";

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSeverity, setModalSeverity] = useState<ModalSeverity>("info");

  const displayModal = (message: string, severity: ModalSeverity) => {
    setShowModal(true);
    setModalMessage(message);
    setModalSeverity(severity);

    setTimeout(() => {
      setShowModal(false);
      setModalMessage("");
    }, 3500);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ transition: { delay: 0.5, duration: 0.5 }, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-10 s:py-16"
    >
      <section className="mx-auto h-fit max-w-[600px] md:max-w-[1300px] px-10 xs:px-24">
        <h1 className="section-title">Zapraszam do kontaktu!</h1>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
          <ContactPhotos />
          <div className="flex flex-col md:mr-12 grow max-w-[400px]">
            <ContactOptions />
            <ContactForm displayModal={displayModal} />
          </div>
        </div>
        {showModal && <Modal message={modalMessage} severity={modalSeverity} />}
      </section>
    </motion.main>
  );
};

export default Contact;
