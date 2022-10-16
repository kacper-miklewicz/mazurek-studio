interface StudioOwnerProps {}

const StudioOwner: React.FC<StudioOwnerProps> = () => {
  return (
    <section className="flex flex-col gap-6 xs:gap-12">
      <h2 className="about-title">Karolina Mazurek</h2>
      <picture>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fo-mnie%2Fo-mnie-owner-mobile.png?alt=media&token=5acd938c-fe2b-4eff-b7a2-d2beab1017eb"
          alt=""
        />
      </picture>
      <p className="about-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        vitae distinctio pariatur modi minus odit saepe atque necessitatibus,
        velit natus est animi asperiores repellendus blanditiis ratione unde.
        Accusantium ab eaque aut expedita fugiat nesciunt laboriosam quidem?
        Cupiditate maiores alias voluptatibus sunt placeat mollitia temporibus
        saepe nihil nisi minus. Ea, vel!
      </p>
    </section>
  );
};

export default StudioOwner;
