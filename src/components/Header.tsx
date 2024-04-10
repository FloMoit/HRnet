import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-2 ">
      <NavLink
        to="/"
        className="flex flex-row items-center justify-center gap-3">
        <h1 className="text-5xl font-bold">HRNet</h1>
      </NavLink>
    </header>
  );
}
