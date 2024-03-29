import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { ReactComponent as LogoDark } from "../img/logo-dark.svg"
import { ReactComponent as LogoLight } from "../img/logo-light.svg"

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Skillset",
    to: "/skillset",
    active: "skillset",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Work Experience",
    to: "/experience",
    active: "work experience",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );
  const Logo = darkMode ? <LogoLight height={75} /> : <LogoDark height={75} />
  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link
              to={link.to}
              onClick={() => setActive(link.active)}
              className={Style.link}
            >
              {!link.type && <p style={{ padding: "0.5rem 0" }}>{link.name}</p>}
              {link.type && Logo}
            </Link>
          </Box>
        ))}
        <p>
          <a href={"http://rushikeshpandit.in/blogs/"} target="_blank" rel="noopener noreferrer">Blogs</a>
        </p>
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
