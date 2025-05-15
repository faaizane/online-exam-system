import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path) =>
    `flex items-center px-8 py-4 text-base transition-colors ${
      currentPath === path
        ? 'bg-[#003366] text-white font-semibold'
        : 'text-white hover:bg-[#003366]'
    }`;

  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-[#002855] text-white flex flex-col justify-between py-10">
      <div>
        <div className="text-center mb-12">
          <img src="/Logo-wbg.png" alt="UET Logo" className="w-20 h-20 mx-auto" />
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/tdashboard" className={linkClass('/tdashboard')}>
            <i className="fa-solid fa-house mr-3"></i>
            Dashboard
          </Link>
          <Link to="/studentmanagement" className={linkClass('/students')}>
            <i className="fa-solid fa-user mr-3"></i>
            Student Management
          </Link>
          <Link to="/manageexams" className={linkClass('/exams')}>
            <i className="fa-solid fa-clipboard-check mr-3"></i>
            Manage Exams
          </Link>
          <Link to="/reviewcheating" className={linkClass('/cheating')}>
            <i className="fa-solid fa-eye mr-3"></i>
            Review Cheating
          </Link>
        </nav>
      </div>
      <div className="px-8">
        <Link to="/logout" className={linkClass('/logout')}>
          <i className="fa-solid fa-right-from-bracket mr-3"></i>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
