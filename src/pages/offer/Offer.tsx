import { firstParagraph } from "./consts";
import OfferPoints from "./OfferPoints";

const Offer: React.FC = () => {
  return (
    <main className="px-5 py-10 mx-auto max-w-[550px] xs:px-16 md:max-w-[1480px]">
      <h2 className="section-title md:mb-10">Oferta</h2>
      <p className="section-text">{firstParagraph}</p>
      <picture className="mx-auto">
        <source
          media="(min-width: 1120px)"
          srcSet="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio.png?alt=media&token=8d410b02-707f-4932-a184-03fd590e167b"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio-mobile.png?alt=media&token=0bf163f8-c119-4da6-a482-00848c71e78c"
          alt="about section"
        />
      </picture>
      <OfferPoints />
    </main>
  );
};

export default Offer;
