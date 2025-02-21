import React from "react";

const Sidebar = () => (
  <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
    <nav>
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Events</li>
        <li className="hover:text-blue-400 cursor-pointer">Resources</li>
        <li className="hover:text-blue-400 cursor-pointer">About Us</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
