import { ModalSeverity } from "./types";

interface ModalProps {
  message: string;
  severity: ModalSeverity;
}

const Modal: React.FC<ModalProps> = ({ message, severity }) => {
  const isInfoSeverity = severity === "info";

  return (
    <div
      className={`fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 px-4 py-6 font-bold text-center s:w-[60%] md:w-fit md:px-12 ${
        isInfoSeverity ? "bg-darker text-black" : "bg-red-500 text-white"
      }`}
    >
      {message}
    </div>
  );
};

export default Modal;
