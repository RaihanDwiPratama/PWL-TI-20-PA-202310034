import React from "react";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoDiscord } from "react-icons/io5";

export default function Footers() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <IoLogoFigma style={{width: 36, height: 36}} />
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2023 Raihan Dwi Pratama, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <IoLogoGithub style={{width: 36, height: 36}} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <IoLogoInstagram style={{width: 36, height: 36}} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <IoLogoDiscord style={{width: 36, height: 36}} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
