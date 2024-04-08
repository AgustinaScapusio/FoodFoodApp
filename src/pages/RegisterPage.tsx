import React, { useRef, useState } from "react";
import { useAppDispatch } from "../store";
import { postUser } from "../http/RegisterHttp";
import eyeClosed from "../../public/eye-vector-closed.svg";
import eyeOpen from "../../public/eye-vector-open.svg"
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert("Password and confirm password do not match");
      return;
    }
    dispatch(
      postUser({
        userName: usernameRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      }),
    );
    navigate("/login");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="text-3xl font-bold text-center mb-6">Register</div>
      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-10 pt-8 pb-9">
        <div className="mb-6">
          <input
            required
            placeholder="Email"
            name="username"
            ref={usernameRef}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 relative">
          <input
            required
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            ref={passwordRef}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
  type="button"
  onClick={toggleShowPassword}
  className="absolute top-0 right-0 h-full flex items-center pr-4 focus:outline-none"
>
  {showPassword ? (
    <img src={eyeClosed} className="h-6 w-6" alt="Hide Password" />
  ) : (
    <img src={eyeOpen} className="h-6 w-6" alt="Show Password" />
  )}
</button>
        </div>
        <div className="mb-6 relative">
          <input
            required
            placeholder="Confirm Password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            ref={confirmPasswordRef}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
         <button
  type="button"
  onClick={toggleShowPassword}
  className="absolute top-0 right-0 h-full flex items-center pr-4 focus:outline-none"
>
  {showPassword ? (
    <img src={eyeClosed} className="h-6 w-6" alt="Hide Password" />
  ) : (
    <img src={eyeOpen} className="h-6 w-6" alt="Show Password" />
  )}
</button>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#35E1FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
