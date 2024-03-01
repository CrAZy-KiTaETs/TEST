import React, { Component } from "react";
import "./header.css";
import navItems from "../../../images/nav-icons.png"

class MainHeader extends Component {
  render() {
    return (
      <div className="header">
          <div className="searchinp-wrapper">
            <input
              type="text"
              className="search"
              placeholder="поиск"
            />
          </div>
        <img src={navItems} alt="" srcset="" />
      </div>
    );
  }
}

export default MainHeader;
