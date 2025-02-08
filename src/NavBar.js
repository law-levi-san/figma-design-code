import React from "react";

const NavBar = () => {
  return (
    <div className="container-app">
      {/* Navbar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-light custom-navbar d-flex">
          <div className="container-fluid custom-container">
            <div>
              <a className="navbar-brand" href="/">
                <img src="/assets/HamburgerIcon.svg" alt="Icon 1" />
              </a>
              <a className="navbar-brand" href="/">
                <img src="/assets/LogoIcon.svg" alt="Icon 1" />
              </a>
            </div>
            <div className="d-flex gap-3">
              <a className="navbar-brand-icon" href="/">
                <img src="/assets/SearchBarIcon.svg" alt="Icon 3" />
              </a>
              <a className="navbar-brand-icon" href="/">
                <img src="/assets/AppGridIcon.svg" alt="Icon 3" />
              </a>
              <a className="navbar-brand-icon" href="/">
                <img src="/assets/ToggleIcon.svg" alt="Icon 3" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
