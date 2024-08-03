import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Anasayfa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="services" smooth={true} duration={500} offset={-70}>Hizmetler</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="comment" smooth={true} duration={500} offset={-70}>Yorumlar</Link>
              </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="about" smooth={true} duration={500} offset={-70}>Hakkında</Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="blog" smooth={true} duration={500} offset={-70}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500} offset={-70}>İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
