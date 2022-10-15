import ContactOption from "./ContactOption";

import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <main className="py-40">
      <section className="w-fit mx-auto">
        <h1 className="font-bold mb-16 text-xl xs:text-[26px]">
          Zapraszam do kontaktu!
        </h1>
        <div>
          <a href="tel:691262294">
            <ContactOption icon={<FaPhone />} value="123 456 789" />
          </a>
          <a href="mailto:kacper.miklewicz@gmail.com">
            <ContactOption icon={<FaEnvelope />} value="example@example.com" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
