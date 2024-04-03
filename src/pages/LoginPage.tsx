import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../http/LoginHttp";
import { useAppDispatch, useAppSelector } from "../store";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const { accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    dispatch(postLogin({ email, password }));
  };

  if (accessToken) {
    navigate('/');
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-3xl font-bold text-center">Login</div>
      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-10 pt-8 pb-9 mb-2 mt-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-800 leading-tight focus:outline-none focus:shadow-outline mt-2"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-bold mb-2 mt-2" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#35E1FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="text-center mt-4">
          <p>Don't have an account?</p>
          <button onClick={()=> {navigate('/register')}}className="bg-[#35E1FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-2">Register</button>
        </div>
      </form>

    </div>
  );
}
