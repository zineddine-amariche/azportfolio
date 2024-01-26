import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyle, linkStyles, underlineStyles }) => {
    const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link,index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
