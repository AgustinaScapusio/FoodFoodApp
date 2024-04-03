import { FormEvent, useRef } from "react";
import { useAppDispatch } from "../store";
import { postLogin } from "../http/LoginHttp";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<HTMLInputElement>(null); 
  const emailRef = useRef<HTMLInputElement>(null); 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const email = emailRef.current?.value || ""; 
    const password = passwordRef.current?.value || ""; 
    dispatch(postLogin({ email, password }));
    console.log("Login submitted");
  };

  return (
    <>
      <p>Log In</p>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="text" placeholder="Username" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
