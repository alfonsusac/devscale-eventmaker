import React from "react";

export const RegisterForm = () => {
  return (
    <div className="flex w-full h-full">
      <div className="bg-blue-500 h-[100vh] w-[50vw]"></div>
      <div className="flex items-center justify-center w-[50vw]">
        <form className="flex flex-col gap-4 w-80">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};
