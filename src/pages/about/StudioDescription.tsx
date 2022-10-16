import studioMobile from "../../assets/img/o-mnie/o-mnie-studio-mobile.png";

interface StudioDescriptionProps {}

const StudioDescription: React.FC<StudioDescriptionProps> = () => {
  return (
    <section className="studio-description flex flex-col gap-6 pb-20 mb-20 xs:gap-12">
      <h2 className="about-title">Mazurek Studio</h2>
      <picture className="mx-auto">
        <img src={studioMobile} alt="" />
      </picture>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        nesciunt! Consequuntur quam numquam iste quibusdam beatae autem optio
        vitae sapiente, magni voluptatum culpa voluptas, facere mollitia alias
        quos, libero quia?
      </p>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
        est temporibus totam ducimus molestias, dicta minus magnam cum porro,
        architecto consequuntur, voluptate at. Praesentium harum ea itaque iste,
        numquam asperiores animi incidunt tenetur cupiditate voluptates dolor
        voluptatum exercitationem fugit quam illum quaerat, adipisci odit
        suscipit voluptatem quia? Debitis, ratione!
      </p>
    </section>
  );
};

export default StudioDescription;
