import { NavLink } from "react-router-dom";

interface MenuLinkProps {
  pageLink: string;
  text: string;
}

const MenuLink: React.FC<MenuLinkProps> = props => {
  return (
    <li>
      <NavLink
        to={props.pageLink}
        className="block w-full text-center text-2xl leading-[2.5]"
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default MenuLink;
