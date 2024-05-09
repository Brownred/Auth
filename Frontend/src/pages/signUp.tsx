// import SignUpCard from "@/components/signUp/card";

import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* < SignUpCard /> */}
      <h1 className="text-3xl text-center font-semibold my-7">Create an Account</h1>
      <form action="" className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />
        <input type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />
        <input type="password" placeholder="password" id="password" className="bg-slate-100 p-3 rounded-lg" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="mt-5">
        <p>Have an account? 
          <Link to='/login'>
          <span className="text-blue-500"> log in</span>
          </Link>
          </p>
      </div>
    </div>
  )
}
