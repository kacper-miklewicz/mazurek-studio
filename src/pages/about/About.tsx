import { Link } from "react-router-dom";
import {
  paragraphs as textParagraphs,
  offerParagraph,
  finalParagraph,
} from "./consts/textParagraphs";

const About: React.FC = () => {
  return (
    <main className="px-5 py-10 mx-auto max-w-[550px] xs:px-16 md:max-w-[1480px]">
      <h2 className="section-title md:mb-10">O mnie</h2>
      <section className="about-section flex flex-col gap-6 xs:gap-12 md:items-center md:flex-row md:mb-20">
        <div className="md:w-1/2 md:flex-grow md:mr-10 l:mr-10">
          <picture className="mx-auto">
            <source
              media="(min-width: 1120px)"
              srcSet="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner.png?alt=media&token=325c95de-14f4-48f9-bdfd-0366912e3bd3"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner-mobile.png?alt=media&token=5acd938c-fe2b-4eff-b7a2-d2beab1017eb"
              alt="about section"
            />
          </picture>
        </div>
        <div className="md:w-1/2">
          {textParagraphs.map(paragraph => (
            <p key={paragraph} className="section-text md:mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            to="/oferta"
            className="section-text block underline hover:text-black/80"
          >
            {offerParagraph}
          </Link>
          <p className="section-text">{finalParagraph}</p>
        </div>
      </section>
    </main>
  );
};

export default About;
