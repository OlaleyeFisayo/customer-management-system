import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import customerIcon from "../../assets/images/customer-96.png";
import homeIcon from "../../assets/svg/home.svg";

export default function Sidebar() {
  return (
    <div className="max-w-[300px] w-full bg-white px-8 py-8 shadow-md font-mono">
      <div className="w-[30px] flex gap-[10px] mb-[20px] items-center uppercase">
        <img src={logo} alt="logo" className="w-full h-full" />
        <p className="">GetData</p>
      </div>
      <ul>
        <p className="text-gray-500 pb-3">Main Menu</p>
        <li className="pl-[20px]  pb-2">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "hover:text-gray-500"
            }
          >
            <img className="w-5 inline mr-2" src={homeIcon} alt="home icon" />
            Dashboard
          </NavLink>
        </li>
        <li className="pl-[20px] ">
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "hover:text-gray-500"
            }
          >
            <img
              className="w-5 inline mr-2"
              src={customerIcon}
              alt="Customer Icon"
            />
            Customer
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
