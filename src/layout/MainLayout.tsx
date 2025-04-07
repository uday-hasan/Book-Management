import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="flex md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            open ? "fixed right-5 top-5" : "fixed right-5 top-5"
          } md:hidden z-10`}
        >
          {open ? (
            <IoClose className="text-white" />
          ) : (
            <CiMenuKebab className="text-white" />
          )}
        </button>
        <Navbar
          classname={`${
            open ? "right-0 justify-start items-start px-2" : "-right-[200px]"
          }`}
        />
      </div>
      <div className="p-4 min-h-screen pl-0 md:pl-[250px]">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
