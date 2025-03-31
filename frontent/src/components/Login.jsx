import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("User Logged In successfully!");
        navigate("/home");
        reset();
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Failed to Log In. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center h-full mt-20 bg-gray-50"
    >
      <h1 className="text-3xl font-bold text-slate-800 w-[230px] h-[38px] mb-[24px]">
        Welcome back!
      </h1>
      <div className="grid grid-row-2 gap-[12px] w-[320px] h-[120px]">
        <input
          type="email"
          placeholder="UID"
          {...register("email", { required: "UID is required" })}
          className={`bg-white rounded border-1 border-slate-400 p-2 
            ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
        />
        {errors.email && <span className="text-red-500 ">{errors.email.message}</span>}
        
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className={`bg-white rounded border-1 border-slate-400 p-2
            ${
              errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white w-[330px] h-[60px] border-r-8 border-1 pt-[16px] pr-[25px] pb-[16px] pl-[8px] rounded mt-[24px] hover:bg-slate-500 transition disabled:bg-gray-400 cursor-pointer"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
