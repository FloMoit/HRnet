import React from "react";
import { MyForm } from "../components/MyForm.js";
import { NavLink } from "react-router-dom";
import UsersTable from "../components/UsersTable.tsx";

export default function Home() {
  return (
    <>
      <div className="mx-16 my-6 ">
        <div className="flex justify-center gap-6 mx-0 my-6 text-xl font-semibold">
          <h2>Create User</h2>
          <NavLink
            to="/UsersTable"
            className="underline text-slate-200 underline-offset-4">
            View Current Users
          </NavLink>
        </div>
        <div className="flex justify-center">
          <MyForm />
        </div>
      </div>
    </>
  );
}
