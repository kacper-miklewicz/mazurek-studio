import { motion } from "framer-motion";

import { firstParagraph } from "./consts";
import OfferPoints from "./OfferPoints";

const Offer: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ transition: { delay: 0.5, duration: 0.5 }, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-5 py-10 mx-auto w-fit max-w-[550px] xs:px-16 md:max-w-[920px]"
    >
      <h2 className="section-title md:mb-10">Oferta</h2>
      <p className="section-text">{firstParagraph}</p>
      <picture className="mx-auto">
        <source
          media="(min-width: 1024px)"
          srcSet="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio.png?alt=media&token=fe0a85ef-2b17-4fcd-b9f0-1f3c7662e9b8"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio-mobile.png?alt=media&token=0bf163f8-c119-4da6-a482-00848c71e78c"
          alt="offer section"
        />
      </picture>
      <OfferPoints />
    </motion.main>
  );
};

export default Offer;
