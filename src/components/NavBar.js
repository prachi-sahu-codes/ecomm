import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBag, BsSearch, BsPerson, BsHeart } from "react-icons/bs";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../backend/utils/actionType";

//BsHeart, BsPerson, BsSearch, BsSliders2(phone filter), BsChevronDown, BsChevronUp, BsDashLg, BsDash, BsPlusLg, BsPlus, BsJustify(hamburger)

const styleLinks = ({ isActive }) => ({
  borderBottom: isActive ? "1px solid #fff" : "none",
});

export const NavBar = () => {
  const { state, dispatch } = useData();
  return (
    <div className="nav-flex">
      <Link to="/" className="nav-logo">
        <h2>FURN</h2>
      </Link>

      <div className="flex-center">
        <BsSearch />
        <input
          type="text"
          className="nav-search"
          value={state.searchTerm}
          onChange={(e) =>
            dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value })
          }
        />
      </div>

      <div className="flex-center">
        <NavLink style={styleLinks} to="/shop" className="nav-link">
          Shop
        </NavLink>
        <Link to="/account">
          <BsPerson className="nav-link nav-acc" />
        </Link>
        <Link to="/wishlist">
          <BsHeart className="nav-link " />
        </Link>
        <Link to="/cart">
          <BsBag className="nav-link" />
        </Link>
      </div>
    </div>
  );
};
