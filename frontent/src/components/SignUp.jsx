import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors,isSubmitting }, reset } = useForm();
  const [serverError, setServerError] = useState(""); // 🔹 Store backend error

  async function onSubmit(data) {
    try {
      setServerError(""); // Reset previous error messages

      const response = await axios.post("http://localhost:5000/api/signUp", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("✅ User registered successfully!");
        reset();
        navigate("/login");

      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);

      if (error.response) {
        if (error.response.status === 400) {
          setServerError("User already exists! Please try another email.");
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      } else {
        setServerError("Network error. Please check your connection.");
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 bg-gray-50">
      <h1 className="text-3xl text-slate-900 font-bold p-3">Sign Up</h1>

      {serverError && (
        <p className="text-red-500 text-sm">{serverError}</p> // 🔹 Show error message
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        {/* Full Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            placeholder="ex-John"
            className={`border p-2 w-full rounded ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
            {...register("fullName", { required: "Full Name is required", minLength: { value: 3, message: "Min length is at least 3" } })}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="example123@gmail.com"
            className={`border p-2 w-full rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="********"
            className={`border p-2 w-full rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-slate-500 transition" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
