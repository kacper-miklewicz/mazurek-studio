import AboutSection from "./AboutSection";
import textParagraphs from "./consts/textParagraphs";

interface StudioOwnerProps {}

const StudioOwner: React.FC<StudioOwnerProps> = () => {
  return (
    <AboutSection
      title="O mnie"
      mobileImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner-mobile.png?alt=media&token=5acd938c-fe2b-4eff-b7a2-d2beab1017eb"
      desktopImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner.png?alt=media&token=325c95de-14f4-48f9-bdfd-0366912e3bd3"
    >
      {textParagraphs.map(paragraph => (
        <p key={paragraph} className="section-text md:mb-6">
          {paragraph}
        </p>
      ))}
    </AboutSection>
  );
};

export default StudioOwner;
