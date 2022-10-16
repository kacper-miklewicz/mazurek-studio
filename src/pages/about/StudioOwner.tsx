import ownerMobilePhoto from "../../assets/o-mnie/o-mnie-owner-mobile.png";

interface StudioOwnerProps {}

const StudioOwner: React.FC<StudioOwnerProps> = () => {
  return (
    <section className="flex flex-col gap-6 xs:gap-12">
      <h2 className="about-title">Karolina Mazurek</h2>
      <picture>
        <img src={ownerMobilePhoto} alt="" />
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
