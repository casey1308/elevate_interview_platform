import React from "react";

const Content = () => (
  <main className="flex-1 flex flex-col justify-center items-center p-10">
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-3"
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Login
      </button>
    </div>
  </main>
);

export default Content;
