import { AiFillHome } from "react-icons/ai";

import { FaBookReader } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: <AiFillHome />,
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: <FaBookReader />,
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: <MdHomeRepairService />,
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: <MdPermContactCalendar />,
  },
  {
    title: "Sign Up",
    url: "/signup",
    cName: "nav-links-mobile",
  },
];
