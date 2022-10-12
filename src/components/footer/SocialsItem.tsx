interface SocialsItemProps {
  url: string;
  icon: JSX.Element;
}

const SocialsItem: React.FC<SocialsItemProps> = ({ url, icon }) => {
  return (
    <li>
      <a href={url} className="text-3xl text-white/80 hover:text-white">
        {icon}
      </a>
    </li>
  );
};

export default SocialsItem;
