import React, { useRef } from "react";
import { useAppDispatch } from "../store";
import { postUser } from "../http/RegisterHttp.tsx";

export function RegisterPage() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert("Password and confirm password do not match");
      return;
    }
    console.log({ usernameRef, passwordRef, confirmPasswordRef });
    dispatch(
      postUser({
        username: usernameRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      }),
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder={"Username"} name={"username"} ref={usernameRef} />
        <input
          placeholder={"Password"}
          name={"password"}
          type="password"
          ref={passwordRef}
        />
        <input
          placeholder={"Confirm Password"}
          name={"confirmPassword"}
          type="password"
          ref={confirmPasswordRef}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
