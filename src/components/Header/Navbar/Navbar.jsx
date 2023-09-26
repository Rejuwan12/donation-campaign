import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <nav className="flex justify-between items-center py-2 px-4 shadow-lg">
                <Logo/>
                <ul className="flex gap-3 font-medium text-xl text-[#0B0B0B]">
                    <li className="">
                    <NavLink
  to="/"className ={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}> Home </NavLink>
                    </li>
                    <li>
                    <NavLink
  to="/donation"className ={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}> Donation </NavLink>
                    </li>
                    <li>
                    <NavLink
  to="/statistics"className ={ ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}> Statistics </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;