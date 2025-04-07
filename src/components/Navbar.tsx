import { NavLink, useLocation } from "react-router";

const NavigationOption = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Wise List",
    href: "/wiselist",
  },
];

const Navbar = ({ classname }: { classname?: string }) => {
  const { pathname } = useLocation();
  return (
    <ul
      className={`h-screen flex flex-col items-center gap-4 fixed w-[200px] py-4 ${classname} transition-all duration-300 bg-secondary`}
    >
      {NavigationOption.map((item) => (
        <div key={item.href} className="w-full px-4">
          <NavLink to={item.href}>
            <button
              className={`${
                pathname === item.href ? "active-link" : ""
              } w-full`}
            >
              {item.title}
            </button>
          </NavLink>
        </div>
      ))}
    </ul>
  );
};

export default Navbar;
