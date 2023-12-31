import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";
import { Button, Logo } from "../components";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call the login method from your AuthService
      const session = await authService.login(data.email, data.password);

      if (session) {
        // If login successful, update Redux state
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
          console.log("Login successful");
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      setLoginError("Invalid Credentials");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className=" max-w-md mx-auto my-8 border p-8 rounded-md">
      <div className="mb-6 text-center">
        <Logo />
        <h2 className="text-2xl font-bold mt-2">Login</h2>
      </div>

      {loginError && (
        <div className="mb-4 text-red-500 text-sm">{loginError}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className={`w-full border px-4 py-2 rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            id="password"
            className={`w-full border px-4 py-2 rounded-md focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Login
        </Button>
      </form>

      <div className="mt-4">
        <p className="text-gray-700">
          New User?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
