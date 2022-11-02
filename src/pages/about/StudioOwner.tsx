import AboutSection from "./AboutSection";

interface StudioOwnerProps {}

const StudioOwner: React.FC<StudioOwnerProps> = () => {
  return (
    <AboutSection
      title="Karolina Mazurek"
      reversed={false}
      mobileImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner-mobile.png?alt=media&token=5acd938c-fe2b-4eff-b7a2-d2beab1017eb"
      desktopImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner.png?alt=media&token=325c95de-14f4-48f9-bdfd-0366912e3bd3"
    >
      <p className="about-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        vitae distinctio pariatur modi minus odit saepe atque necessitatibus,
        velit natus est animi asperiores repellendus blanditiis ratione unde.
        Accusantium ab eaque aut expedita fugiat nesciunt laboriosam quidem?
        Cupiditate maiores alias voluptatibus sunt placeat mollitia temporibus
        saepe nihil nisi minus. Ea, vel!
      </p>
    </AboutSection>
  );
};

export default StudioOwner;
