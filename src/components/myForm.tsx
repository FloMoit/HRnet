import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddUsers, Purge } from "../redux/dataReducer";
import states from "../data/States.json";
import ModalePlugin from "@fmoitrier/modale-plugin";
import { NavLink } from "react-router-dom";

export const MyForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data).users;

  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const CalculateAge = (dob) => {
    return true;
  };

  const validateBirthDate = (value) => {
    return true;
  };

  const validateStartDate = (value) => {
    return true;
  };

  const changeFormat = (value) => {
    const myarray = value.split("-");
    const year = myarray[0];
    const month = myarray[1];
    const day = myarray[2];
    return `${month}/${day}/${year}`;
  };

  const OnSubmit = (dataOneUser) => {
    dataOneUser.birthdate = changeFormat(dataOneUser.birthdate);
    dataOneUser.startdate = changeFormat(dataOneUser.startdate);
    const arr = Object.assign(dataOneUser, { id: data.length + 1 });
    dispatch(AddUsers(arr));
    setOpenModal(true);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(OnSubmit)}
        noValidate
        className="flex flex-col gap-3 text-lg max-w-[500px]">
        <div className="grid items-center grid-cols-2 gap-2">
          <label htmlFor="firstname">First Name</label>
          <div className="flex flex-col">
            <input
              {...register("firstname", {
                required: "Field is required",
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z -]{2,}$/,
                  message: "Invalid firstname format",
                },
              })}
              type="text"
              id="firstname"
              className="p-1 border-2 rounded border-slate-200 text-slate-800"
            />
            <span className="text-rose-600">{errors.firstname?.message}</span>
          </div>

          <label htmlFor="lastname">Last Name</label>
          <div className="flex flex-col">
            <input
              {...register("lastname", {
                required: "Field is required",
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z -]{2,}$/,
                  message: "Invalid lastname format",
                },
              })}
              type="text"
              id="lastname"
              className="p-1 border-2 rounded border-slate-200 text-slate-800"
            />
            <span className="text-rose-600">{errors.lastname?.message}</span>
          </div>

          <label htmlFor="birthdate">Date of Birth</label>
          <div className="flex flex-col">
            <input
              {...register("birthdate", {
                required: "Field is required",
                validate: validateBirthDate,
              })}
              id="birthdate"
              type="date"
              className="p-1 border-2 rounded border-slate-200 text-slate-800"
            />
            <span className="text-rose-600">{errors.birthdate?.message}</span>
          </div>

          <label htmlFor="startdate">Start Date</label>
          <div className="flex flex-col">
            <input
              {...register("startdate", {
                required: "Field is required",
                validate: validateStartDate,
              })}
              id="startdate"
              type="date"
              className="p-1 border-2 rounded border-slate-200 text-slate-800"
            />
            <span className="text-rose-600">{errors.startdate?.message}</span>
          </div>
        </div>
        <fieldset className="border-2 rounded border-slate-200">
          <legend className="p-2 ml-2">Address</legend>
          <div className="grid items-center grid-cols-2 gap-2 p-2">
            <label htmlFor="street">Street</label>
            <div className="flex flex-col">
              <input
                {...register("street", {
                  required: "Field is required",
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z -]{2,}$/,
                    message: "Invalid Street format",
                  },
                })}
                id="street"
                type="text"
                className="p-1 border-2 rounded border-slate-200 text-slate-800"
              />
              <span className="text-rose-600">{errors.street?.message}</span>
            </div>
            <label htmlFor="city">City</label>
            <div className="flex flex-col">
              <input
                {...register("city", {
                  required: "Field is required",
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z -]{2,}$/,
                    message: "Invalid City format",
                  },
                })}
                id="city"
                type="text"
                className="p-1 border-2 rounded border-slate-200 text-slate-800"
              />
              <span className="text-rose-600">{errors.city?.message}</span>
            </div>

            <label htmlFor="state">State</label>
            <select
              {...register("state")}
              id="state"
              className="p-1 border-2 rounded border-slate-200 text-slate-800">
              {states.map((state) => (
                <option key={state.abbreviation}>{state.name} </option>
              ))}
            </select>

            <label htmlFor="zipcode">Zip Code</label>
            <div className="flex flex-col">
              <input
                {...register("zipcode", {
                  required: "Field is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid ZipCode format",
                  },
                })}
                id="zipcode"
                type="number"
                className="p-1 border-2 rounded border-slate-200 text-slate-800"
              />
              <span className="text-rose-600">{errors.zipcode?.message}</span>
            </div>
          </div>
        </fieldset>
        <div className="flex items-center justify-between">
          <label htmlFor="department" className="">
            Department
          </label>
          <select
            {...register("department")}
            id="department"
            className="p-1 border-2 rounded border-slate-200 text-slate-800">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="w-32 p-2 border-2 rounded bg-slate-200 border-slate-200 text-slate-800">
            Save
          </button>
        </div>
      </form>
      {openModal && (
        <ModalePlugin
          onClose={setOpenModal}
          textModal="User successfully created !">
          <NavLink className="LinkOfModal" to={"UsersTable"}>
            Click here to view the user list
          </NavLink>
        </ModalePlugin>
      )}
    </>
  );
};
