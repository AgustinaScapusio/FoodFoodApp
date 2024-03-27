import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { postUser } from "../http/RegisterHttp.tsx";

export function RegisterPage() {
  const userRef = useRef(null);

  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.register);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      username: userRef.current["userName"].value,
      password: userRef.current["password"].value,
      confirmPassword: userRef.current["confirmPassword"].value,
    };
  };

  return (
    <>
      <form ref={userRef} method="post" onSubmit={handleSubmit}>
        <input placeholder={"Username"} name={"userName"} />
        <input placeholder={"Password"} name={"password"} />
        <input placeholder={"Confirm Password"} name={"confirmPassword"} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
