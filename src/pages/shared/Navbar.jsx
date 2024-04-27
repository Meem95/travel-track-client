import logo from '../../assets/images/logo.png';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-yellow-50 max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>All Tourists Spot</a></li>
      <li><a>Add Tourists Spot</a></li>
      <li><a>My List</a></li>
      <li><a>Contact</a></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">

      <img className="w-28" src={logo}/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>All Tourists Spot</a></li>
      <li><a>Add Tourists Spot</a></li>
      <li><a>My List</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-1">
  <button className="btn btn-warning bg-[#ff8900] rounded-3xl text-white ">Login</button>
  <button className="btn btn-warning bg-[#ff8900] rounded-3xl text-white">Register</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;