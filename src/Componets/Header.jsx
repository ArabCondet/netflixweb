import React from "react";
import background from "./../assets/images/header-image.png";
import logo from "./../assets/images/logo.png";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <img src={logo} className="logos" />
        <div className="button">
            <select name="LanguageSelect" id="Bahasa" className="Select" >
                <option lang="Eng">English</option>
                <option selected="Bahasa Indonesia">Bahasa indonesia</option>
            </select>
              <div className="signin">
                <a role="button" class="" href="">Sign In</a>
              </div>
          </div>
        </div>
      <img src={background} className="background" />
    </div>
  );
}
// <img src={background} className="background" />

export default Header;
