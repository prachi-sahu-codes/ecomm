import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBag, BsSearch, BsPerson, BsHeart } from "react-icons/bs";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../reducer/actionType";
import { useClick } from "../context/ClickContext";

//BsHeart, BsPerson, BsSearch, BsSliders2(phone filter), BsChevronDown, BsChevronUp, BsDashLg, BsDash, BsPlusLg, BsPlus, BsJustify(hamburger)

const styleLinks = ({ isActive }) => ({
  borderBottom: isActive ? "1px solid #fff" : "none",
});

export const NavBar = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const { cartData, wishlistData } = useClick();
  return (
    <div className="nav-flex">
      <NavLink to="/" className="nav-logo">
        <p>FURN</p>
      </NavLink>

      <div className="flex-center">
        <BsSearch />
        <input
          type="text"
          className="nav-search"
          value={state.searchTerm}
          onChange={(e) => {
            navigate("/shop");
            dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
          }}
        />
      </div>

      <div className="flex-center">
        <NavLink style={styleLinks} to="/shop" className="nav-link">
          Shop
        </NavLink>
        <NavLink to="/account">
          <BsPerson className="nav-link nav-acc" />
        </NavLink>
        <NavLink to="/wishlist" className="nav-wishList-icon">
          <BsHeart className="nav-link" />
          {wishlistData?.length > 0 ? <div className="icon-dot"></div> : ""}
        </NavLink>
        <NavLink to="/cart" className="nav-cartList-icon">
          <BsBag className="nav-link" />
          {cartData?.length > 0 ? <div className="icon-dot2"></div> : ""}
        </NavLink>
      </div>
    </div>
  );
};
