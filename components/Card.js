import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Picture from "../images/image.png";

function Card() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="">
        <div className="w-52 relative">
          <Image src={Picture} alt="Picture Post" />
          {/* duration */}
          <div className="absolute bottom-0 right-0 p-2">
            <p className="p-1 bg-gray-800 text-gray-50 text-sm">8:05</p>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-between">
          <div>
            <p className="text-sm text-gray-100">Sign in with h + firebase 9</p>
            <div className="text-xs pt-1 text-gray-100">
              <span>123 views</span> &middot; <span>4 days</span>
            </div>
          </div>
          <DotsVerticalIcon className=" w-5 h-5 text-transparent hover:text-gray-100" />
        </div>
      </div>
    </div>
  );
}

export default Card;
