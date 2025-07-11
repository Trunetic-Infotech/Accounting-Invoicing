import React from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
        Change Password
      </h2>
      <form className="space-y-5">
        {/* Current Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter current password"
          />
          <div className="absolute right-3 top-9 text-gray-500 cursor-pointer">
            <Eye size={18} />
          </div>
        </div>

        {/* New Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter new password"
          />
          <div className="absolute right-3 top-9 text-gray-500 cursor-pointer">
            <EyeOff size={18} />
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Confirm new password"
          />
          <div className="absolute right-3 top-9 text-gray-500 cursor-pointer">
            <EyeOff size={18} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
