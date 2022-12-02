interface ContactOptionProps {
  icon: JSX.Element;
  value: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ icon, value }) => {
  return (
    <div className="flex s:items-center py-6 md:w-full">
      <span className="text-2xl mr-5 xs:text-2xl md:mr-10">{icon}</span>
      <p>{value}</p>
    </div>
  );
};

export default ContactOption;
