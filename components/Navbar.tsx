import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-950 w-full px-16 py-4">
      <ul className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
        </div>
 
        <div className="flex gap-4">
          <Link href={"/client"}>
            <li>Client Page</li>
          </Link>
          <Link href={"/sign-in"}>
            <li>Login</li>
          </Link>

          <Link href={"/sign-up"}>
            <li>SignUp</li>
          </Link>
        </div>
        <div></div>
      </ul>
    </div>
  );
};

export default Navbar;
