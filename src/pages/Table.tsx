import { NavLink } from "react-router-dom";
import { UsersTable } from "../components/UsersTable";

export default function Home() {
  return (
    <>
      <div className="mx-16 my-6 ">
        <div className="flex justify-center gap-6 mx-0 my-6 text-xl font-semibold">
          <NavLink
            to="/"
            className="underline text-slate-200 underline-offset-4">
            Create User
          </NavLink>
          <h2>View Current Users</h2>
        </div>
        <div className="flex justify-center">
          <UsersTable />
        </div>
      </div>
    </>
  );
}
