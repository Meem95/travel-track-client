import { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownLeft, setDropdownLeft] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (left) => {
    setShowDropdown(!showDropdown);
    setDropdownLeft(left);
  };

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };


  return (
    <div>
      <div className="navbar bg-yellow-50 max-w-7xl mx-auto">
        <div className="">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
              onClick={() => toggleDropdown(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {showDropdown && (
            <ul
              className="menu menu-sm  dropdown-content z-30 mt-3 p-2 shadow bg-base-100 rounded-box absolute "
              style={{ left: dropdownLeft,width: 150,padding:12 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                All Tourists Spot
              </NavLink>
              {
                ! user ?
                <NavLink to="/login" 
                className={({ isActive }) =>
                  isActive
                  ? ' font-bold mt-4 '
                    : 'font-bold  mt-4'
                }
              >
           Add Tourists Spot
          </NavLink> :
          <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                My List
              </NavLink>
              }

              



              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Contact Us
              </NavLink>
              {
                
            !user ? ( <NavLink
               to="/edit-profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn hidden'
                    : 'font-bold text-[#2f400e] mt-4 hidden'
                }
              >
                Update Profile
              </NavLink>) :
              ( <NavLink
               to="/edit-profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4 '
                }
              >
                Update Profile
              </NavLink>)
              }
             
            </ul>
          )}
          </div>
          <NavLink to={'/'} className="btn btn-ghost text-xl">
          <a className="btn btn-ghost text-xl">
            <img className="w-28" src={logo} />
          </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden mx-auto lg:flex">
          <ul className="menu menu-horizontal px-1">
          <NavLink to={'/'} className={({ isActive }) =>
                  isActive
                    ? 'text-[#ff8900] font-bold '
                    : 'font-bold text-[#2f400e] '}>  <li>
              <a>Home</a>
            </li></NavLink>
           <NavLink to={'/all-tourist-spot'} className={({ isActive }) =>
                  isActive
                    ? 'text-[#ff8900] font-bold '
                    : 'font-bold text-[#2f400e] '}>
           <li>
              <a>All Tourists Spot</a>
            </li>
            </NavLink>
            
            <NavLink to={'/add-tourist-spot'} className={({ isActive }) =>
                  isActive
                    ? 'text-[#ff8900] font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>Add Tourists Spot</a>
            </li>
            </NavLink>
            
            <NavLink to={'/my-list'} className={({ isActive }) =>
                  isActive
                    ? 'text-[#ff8900] font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>My List</a>
            </li>
            </NavLink>
          
            <NavLink to={'/contact'} className={({ isActive }) =>
                  isActive
                    ? 'text-[#ff8900] font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>Contact</a>
            </li>
            </NavLink>
            
          </ul>
        </div>
        <div className=" space-x-1">
        <Link to="/login">  <button className="btn btn-warning bg-[#ff8900] rounded-3xl text-white ">
            Login
          </button></Link>
          <Link to="/register">
          <button onClick={handleSignOut} className="btn btn-warning bg-[#ff8900] rounded-3xl text-white">
            Register
          </button>
          </Link>
         
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
