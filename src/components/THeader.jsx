import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ name = "Teacher Name", email = "teacher@uetpeshawar.edu.pk" }) {
  return (
    <div className="bg-[#B0C4DE] h-[80px] flex justify-end items-center px-8 shadow-sm">
      <div className="text-right">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
      
      {/* 👇 Link added to profile image */}
      <Link to="/teacherprofile">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-12 h-12 rounded-full ml-4 cursor-pointer hover:opacity-90 transition"
        />
      </Link>
    </div>
  );
}
