interface ContactPhotosProps {}

const ContactPhotos: React.FC<ContactPhotosProps> = () => {
  return (
    <picture className="grow max-w-[450px] l:max-w-[550px]">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Fkontakt%2Fkontakt.jpg?alt=media&token=fe4a57c5-48a4-4b33-8ddc-10b06e954ca7"
        alt="Karolina Mazurek"
      />
    </picture>
  );
};

export default ContactPhotos;
