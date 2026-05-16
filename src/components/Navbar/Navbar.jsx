import logo from "../../../public/assets/Wanderlast.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-2 items-center bg-white p-5">
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink className={"text-cyan-500"} href={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href={"/destinations"}>Destinations</NavLink>
          </li>
          <li>
            <NavLink href={"/my-bookings"}>My Bookings</NavLink>
          </li>
          <li>
            <NavLink href={"/add-destination"}>Add Destination</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Image
          className="w-40"
          src={logo}
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink className="flex items-center gap-1" href={"/profile"}>
              <FaUser /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink href={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink href={"/signup"}>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
