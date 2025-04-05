import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiTask } from "react-icons/si";
import { FcMenu } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
// import { RiLogoutCircleLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const [showNavLinks, SetShowNavLinks] = useState(false);
  const { authUser } = useAuthContext();
  const { username } = authUser;
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleCloseModal = () => {
    SetShowNavLinks(false);
  };

  const handleLogout = async () => {
    await logout();
    SetShowNavLinks(false);
    toast("Successfully signed out");
    navigate("/login");
  };

  return (
    <header className="px-4 sm:px-16 py-6 bg-white ">
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <SiTask className="text-sky-500 text-4xl" />
          <h1 className="text-lg font-medium">
            Welcome <span className="font-light">{username}</span>
          </h1>
        </div>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-8 text-slate-gray font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sky-600 border-b-2 border-sky-600" : null
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/view"
            className={({ isActive }) =>
              isActive ? "text-sky-600 border-b-2 border-sky-600" : null
            }
          >
            View
          </NavLink>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive ? "text-sky-600 border-b-2 border-sky-600" : null
            }
          >
            Summary
          </NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <div
            className="flex gap-2 items-center  border-sky-600 px-2 py-1 bg-primary cursor-pointer rounded-md"
            onClick={handleLogout}
          >
            <span>Log out</span>
          </div>
        </div>

        {/* mobile */}
        {showNavLinks ? (
          <IoCloseOutline
            size={32}
            className="flex md:hidden cursor-pointer text-dark-gray"
            onClick={() => SetShowNavLinks(false)}
          />
        ) : (
          <FcMenu
            className="flex md:hidden cursor-pointer"
            size={28}
            onClick={() => SetShowNavLinks(true)}
          />
        )}

        {showNavLinks && (
          <nav className="absolute right-4 sm:right-16 top-28 flex md:hidden flex-col-reverse gap-4 shadow-lg rounded-md py-4 pl-4 pr-8 duration-150 bg-primary">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive ? "text-sky-600 border-b-2 border-sky-600" : null
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/view"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive ? "text-sky-600  border-b-2 border-sky-600" : null
                }
              >
                View
              </NavLink>
              <NavLink
                to="/summary"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive ? "text-sky-600 border-b-2 border-sky-600" : null
                }
              >
                Summary
              </NavLink>
            </div>
            <div className="flex  items-center justify-between gap-10 ">
              <div
                className="flex gap-2 items-center  border-sky-600 px-2 py-1  cursor-pointer rounded-md border-2"
                onClick={handleLogout}
              >
                <span>Log out</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
