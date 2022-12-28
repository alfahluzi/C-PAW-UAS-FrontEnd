import React from "react";
import Logo from "../image/shopping.png";
function UserTopbar() {
  return (
    <div className="header-top">
      <div className="logo">
        <a href="/Dashboard">
          <h1 className="logo-left">
            Toko<span>Onlen</span>
          </h1>
        </a>
      </div>
      <div className="btn-shop">
        <a href={"/cart"}>
          <img src={Logo} alt="" className="shop" />
        </a>
      </div>
    </div>
  );
}
export default UserTopbar;
