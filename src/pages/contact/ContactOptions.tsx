import { FaEnvelope, FaPhone } from "react-icons/fa";
import { email, phoneNumber } from "./consts";
import ContactOption from "./ContactOption";

interface ContactOptionsProps {}

const ContactOptions: React.FC<ContactOptionsProps> = () => {
  return (
    <div className="mt-10 md:mt-0">
      <h3 className="font-bold s:text-lg">Bezpośrednio:</h3>
      <div className="pt-2 md:pt-0">
        <a href={`tel:${phoneNumber}`}>
          <ContactOption icon={<FaPhone />} value={phoneNumber} />
        </a>
        <a href={`mailto:${email}`}>
          <ContactOption icon={<FaEnvelope />} value={email} />
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
