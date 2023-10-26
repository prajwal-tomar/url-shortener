import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-transparent flex items-center justify-between md:px-36 py-8 text-slate-500 text-sm">
      <div className="flex space-x-10">
        <img src={logo} alt="logo" />
        <ul className="flex items-center space-x-5">
          <li className="hover:text-slate-900 hover:cursor-pointer"> Features </li>
          <li className="hover:text-slate-900 hover:cursor-pointer"> Pricing </li>
          <li className="hover:text-slate-900 hover:cursor-pointer"> Resources </li>
        </ul>
      </div>
      <div className="flex items-center space-x-5">
        <button className="hover:text-slate-900">Login</button>
        <button className="text-white bg-primary-cyan rounded-full px-4 py-2">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
