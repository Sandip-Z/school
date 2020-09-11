import React from "react";
import { Link } from "react-router-dom";
import {
  DownloadOutlined,
  DesktopOutlined,
  MonitorOutlined,
  PhoneOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const TopNav = () => {
  return (
    <div className="d-flex justify-content-end top-nav">
      <ul className="d-flex top-nav__list">
        <li className="top-nav__list--list-item">
          <Link to="#">
            <DownloadOutlined /> Downloads
          </Link>
        </li>
        <li className="top-nav__list--list-item">
          <Link to="#">
            <DesktopOutlined /> Softwares
          </Link>
        </li>
        <li className="top-nav__list--list-item">
          <Link to="#">
            <SolutionOutlined /> PU Results
          </Link>
        </li>
        <li className="top-nav__list--list-item">
          <Link to="#">
            <MonitorOutlined /> Carrers
          </Link>
        </li>
        <li className="top-nav__list--list-item">
          <Link to="#">
            <PhoneOutlined />
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
