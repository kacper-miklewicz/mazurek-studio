import ContactOption from "./ContactOption";

import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <main className="py-40">
      <section className="w-9/12 mx-auto xs:w-1/2 s:w-1/3 l:w-[28%]">
        <h1 className="font-bold mb-16 text-xl xs:text-2xl md:text-3xl">
          Zapraszam do kontaktu!
        </h1>
        <dl>
          <ContactOption icon={<FaPhone />} value="123 456 789" />
          <ContactOption icon={<FaEnvelope />} value="example@example.com" />
        </dl>
      </section>
    </main>
  );
};

export default Contact;
