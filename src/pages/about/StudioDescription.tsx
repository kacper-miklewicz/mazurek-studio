import AboutSection from "./AboutSection";

interface StudioDescriptionProps {}

const StudioDescription: React.FC<StudioDescriptionProps> = () => {
  return (
    <AboutSection
      title="Mazurek Studio"
      mobileImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio-mobile.png?alt=media&token=0bf163f8-c119-4da6-a482-00848c71e78c"
      desktopImg="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-studio.png?alt=media&token=8d410b02-707f-4932-a184-03fd590e167b"
      className="md:pb-56 md:mb-56"
    >
      <p className="section-text md:mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        nesciunt! Consequuntur quam numquam iste quibusdam beatae autem optio
        vitae sapiente, magni voluptatum culpa voluptas, facere mollitia alias
        quos, libero quia?
      </p>
      <p className="section-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
        est temporibus totam ducimus molestias, dicta minus magnam cum porro,
        architecto consequuntur, voluptate at. Praesentium harum ea itaque iste,
        numquam asperiores animi incidunt tenetur cupiditate voluptates dolor
        voluptatum exercitationem fugit quam illum quaerat, adipisci odit
        suscipit voluptatem quia? Debitis, ratione!
      </p>
    </AboutSection>
  );
};

export default StudioDescription;
