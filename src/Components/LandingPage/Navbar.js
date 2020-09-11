import React, { useState, useMemo } from "react";
import logo from "../../Asset/logo.png";
import NavDescription from "./NavDescription";

const Navbar = () => {
  const [descriptionDiplayClassName, setDescriptionDisplayClassName] = useState(
    "d-none"
  );

  const [activeNav, setActiveNav] = useState("");

  const navBarListItem = useMemo(() => {
    return [
      { id: "about_us", name: "About us" },
      { id: "academics", name: "Academics" },
      { id: "facilities", name: "Facilities" },
      { id: "departments", name: "Departments" },
      { id: "admission", name: "Admission" },
      { id: "gallery", name: "Gallery" },
    ];
  }, []);

  const renderNavBarItem = navBarListItem.map((item) => (
    <li
      key={item.id}
      className="mainNav__list--item"
      onMouseEnter={() => handleMouseOver(item.id)}
      onMouseLeave={() => handleMouseOut(item.id)}
    >
      {item.name}
    </li>
  ));

  const handleMouseOver = (id) => {
    setDescriptionDisplayClassName("d-block");
    setActiveNav(id);
  };
  const handleMouseOut = (id) => {
    setDescriptionDisplayClassName("d-none");
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          src={logo}
          alt="Nepal College of Information Technology"
          className="img img-responsive img-logo"
        />
      </div>
      <nav className="mainNav">
        <ul className="mainNav__list">{renderNavBarItem}</ul>
        <div
          className={`mainNav__description ${descriptionDiplayClassName}`}
          onMouseEnter={() => setDescriptionDisplayClassName("d-block")}
          onMouseLeave={() => setDescriptionDisplayClassName("d-none")}
        >
          <NavDescription active={activeNav} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
