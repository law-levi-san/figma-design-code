import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      {/* Navbar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-light custom-navbar d-flex">
          <div className="container-fluid custom-container">
            <a className="navbar-brand" href="/">
              <img src="/assets/NavbarIcon1.svg" alt="Icon 1" />
            </a>

            <a className="navbar-brand-logo" href="/">
              <img src="/assets/NavbarIcon2.svg" alt="Icon 2" />
            </a>

            <a className="navbar-brand-icon" href="/">
              <img src="/assets/NavbarIcon3.svg" alt="Icon 3" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
