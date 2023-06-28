import React from "react";

const Navbar = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <nav className="dt w-100 border-box pa3 ph5-ns">
        {/* <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home"> */}
          {/* <img
            src="http://tachyons.io/img/logo.jpg"
            className="dib w2 h2 br-100"
            alt="Site Name"
          /> */}
        {/* </a> */}
        <div className="dtc v-mid w-75 tr">
          <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="#home"
            title="About"
          >
            Home
          </a>

          <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="#contact"
            title="Contact"
          >
            Contact
          </a>

          <a
            onClick={() => onRouteChange("signout")}
            className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="#0"
          >
            SignOut
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="dt w-100 border-box pa3 ph5-ns">
        <p
          onClick={() => onRouteChange("signin")}
          className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
          href="#0"
        >
          SignIn
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
          href="#0"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navbar;
