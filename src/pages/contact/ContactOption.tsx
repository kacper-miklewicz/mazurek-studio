interface ContactOptionProps {
  icon: JSX.Element;
  value: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ icon, value }) => {
  return (
    <div className="mt-8 flex s:items-center xs:mt-12 md:mt-20">
      <span className="text-2xl mr-5 xs:text-2xl md:text-3xl md:mr-10">
        {icon}
      </span>
      <p className="xs:text-xl md:text-2xl">{value}</p>
    </div>
  );
};

export default ContactOption;
