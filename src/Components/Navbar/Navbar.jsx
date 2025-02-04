import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();

  const navStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "rgb(149, 56, 226)" : "",
    color: isActive ? "rgba(11, 11, 11, 0.7" : "",
  });

  const isHome = location.pathname === "/";

  const allNavLink = (
    <>
      <li> <NavLink to="/" style={navStyles}>Home</NavLink></li>
      <li><NavLink to="/Dashboard" style={navStyles}>Dashboard</NavLink></li>
      <li><NavLink to="/contact" style={navStyles}>Inform center</NavLink></li>
    </>
  );

  return (
    <div className={`${isHome ? "text-white" : "text-black"} rounded-3xl `}>
      <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {allNavLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {allNavLink}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <AiOutlineShoppingCart className="text-4xl bg-white text-black p-2 rounded-4xl cursor-pointer border border-gray-300"/>
          <IoMdHeartEmpty className="text-4xl bg-white text-black p-2 rounded-4xl cursor-pointer border border-gray-300"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;