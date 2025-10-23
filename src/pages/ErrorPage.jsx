import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF7F2] text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-600 mb-4">
          {error?.statusText ||
            error?.message ||
            "An unexpected error occurred."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#FF7B54] text-white font-medium px-6 py-2 rounded-xl hover:bg-[#FF9B73] transition-colors duration-300"
        >
          Go Home
        </button>
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WarmPaws — All Rights Reserved
      </footer>
    </div>
  );
};

export default ErrorPage;
