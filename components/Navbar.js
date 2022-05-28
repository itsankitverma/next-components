import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import FlagStatus from "./FlagStatus";
import useFirebase from "../lib/useFirebase";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const title = "Note Today";
  const { user } = useFirebase();

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
      title: "Contact Us",
      handlePath: () => {
        route.push("/contact");
      },
    },
  ];

  const signUp = "Sign Up";
  const login = "Login";
  return (
    <div>
      <div className="w-full bg-gray-800 text-gray-200 flex justify-between h-16 items-center md:px-40 px-7">
        <div>
          <p
            className="text-2xl cursor-pointer flex items-center"
            onClick={() => route.push("/")}
          >
            <span>{title}</span>{" "}
            <span className="mt-3 pl-1 text-xs">
              <FlagStatus />
            </span>
          </p>
        </div>
        <div className="lg:flex gap-7 hidden">
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
        {!user && (
          <div className=" flex items-center gap-2">
            <button
              className="bg-blue-600 text-white p-1 rounded-full px-4 focus:bg-blue-500 md:block hidden"
              onClick={() => {
                route.push("/signup");
              }}
            >
              {signUp}
            </button>

            <button
              className="bg-blue-600 text-white p-1 rounded-full px-4 focus:bg-blue-500 md:block hidden"
              onClick={() => {
                route.push("/signin");
              }}
            >
              {login}
            </button>
          </div>
        )}
        {user && (
          <div className="lg:flex hidden items-center gap-3 ">
            <img
              src={user.photoURL}
              className="w-8 h-8 rounded-full"
              alt={user.displayName}
            />
            <p>{user.displayName.split(" ")[0]}</p>
          </div>
        )}
        <MenuIcon
          className="w-8 lg:hidden block cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open === true ? (
        <div className="flex gap-4 flex-col md:hidden justify-center items-center bg-gray-800 text-white py-2 border-b-2 border-gray-400  ">
          {user && (
            <div className="flex lg:hidden items-center gap-3 ">
              <img
                src={user.photoURL}
                className="w-8 h-8 rounded-full"
                alt={user.displayName}
              />
              <p>{user.displayName.split(" ")[0]}</p>
            </div>
          )}
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
