interface ContactPhotosProps {}

const ContactPhotos: React.FC<ContactPhotosProps> = () => {
  return (
    <picture className="mx-auto md:mx-0">
      <source
        media="(min-width: 1024px)"
        srcSet="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fkontakt%2Fkontakt.png?alt=media&token=6b8915aa-d4be-4a5a-b713-9ec18b29dfe7"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fkontakt%2Fkontakt-mobile.png?alt=media&token=e4893c8d-1358-4fe0-a709-43766c4cb184"
        alt="offer section"
      />
    </picture>
  );
};

export default ContactPhotos;
