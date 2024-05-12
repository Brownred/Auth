// import SignUpCard from "@/components/signUp/card";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.id]: event.target.value})
  };
  
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/log-in", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
    }

  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* < SignUpCard /> */}
      <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="email" id="email" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="bg-slate-100 p-3 rounded-lg" />
        <button  disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? 'Loading...' : 'Log in'}</button>
      </form>
      <div className="mt-5">
        <p>Don't have an account? 
          <Link to='/signup'>
          <span className="text-blue-500"> Log in</span>
          </Link>
          </p>
      </div>
      <p className="text-red-600 mt-5">{error && 'Something went wrong!'}</p>
    </div>
  )
}
