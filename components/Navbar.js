import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const title = "Navbar";

  const navData = [
    {
      title: "Add User",
      handlePath: () => {
        route.push("/");
      },
    },
    {
      title: "Check User",
      handlePath: () => {
        route.push("/user");
      },
    },
    {
      title: "About",
      handlePath: () => {
        route.push("/about");
      },
    },
  ];
  const contact = "Contact Us";
  return (
    <div>
      <div className="w-full bg-gray-800 text-gray-200 flex justify-between h-16 items-center md:px-40 px-7">
        <div>
          <p
            className="text-2xl cursor-pointer"
            onClick={() => route.push("/")}
          >
            {title}
          </p>
        </div>
        <div className="md:flex gap-7 hidden">
          {navData.map((val, id) => {
            return (
              <span key={id}>
                <p
                  className="p-2 hover:bg-gray-500 hover:text-white  cursor-pointer rounded-md"
                  onClick={() => val.handlePath()}
                >
                  {val.title}
                </p>
              </span>
            );
          })}
        </div>
        <button
          className="bg-blue-600 text-white p-1 rounded-full px-4 focus:bg-blue-500 md:block hidden"
          onClick={() => {
            route.push("/contact");
          }}
        >
          {contact}
        </button>
        <MenuIcon
          className="w-8 md:hidden block"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open === true ? (
        <div className="flex gap-4 flex-col md:hidden justify-center items-center bg-gray-50 py-2 border-b-2 border-gray-400  ">
          {navData.map((val, id) => {
            return (
              <span key={id}>
                <p
                  className="p-2 hover:bg-gray-500 hover:text-white  cursor-pointer rounded-md"
                  onClick={() => val.handlePath()}
                >
                  {val.title}
                </p>
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
