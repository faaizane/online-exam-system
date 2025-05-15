// src/pages/StudentManagement.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

export default function StudentManagement() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 bg-white">
        {/* Header - no horizontal spacing */}
        <div className="bg-[#BAB3B3] p-4 flex justify-end items-center shadow">
          <div className="text-right">
            <h4 className="font-bold">Teacher Name</h4>
            <p className="text-sm text-gray-700">teacher@uetpeshawar.edu.pk</p>
          </div>
          <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
        </div>

        {/* Main Section with 64px side padding */}
        <div className="px-16 py-6">
          <h1 className="text-3xl font-bold mb-6">Student Management</h1>

          {/* Buttons */}
          <div className="mb-4 flex gap-4">
            <button className="bg-[#002855] text-white px-4 py-2 rounded hover:bg-[#001f47] transition">
              Import CSV
            </button>
            <button className="bg-[#002855] text-white px-4 py-2 rounded hover:bg-[#001f47] transition">
              Add Students
            </button>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for a student by name or registration number"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Table */}
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Registration No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Semester</th>
                <th className="p-2">Section</th>
                <th className="p-2">Department</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-black">
                <td className="p-2">21pwbcsxxxx</td>
                <td className="p-2">Student 1</td>
                <td className="p-2">Web Programming</td>
                <td className="p-2">7th</td>
                <td className="p-2">A</td>
                <td className="p-2">Computer Science</td>
                <td className="p-2">🔍 👤</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
