// src/pages/ViewResults.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

export default function ViewResults() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full bg-white">
        {/* Header */}
        <div className="bg-[#D9D9D9] p-4 flex justify-end items-center shadow">
          <div className="text-right">
            <h4 className="font-bold">Teacher Name</h4>
            <p className="text-sm text-gray-700">teacher@uetpeshawar.edu.pk</p>
          </div>
          <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full ml-4" />
        </div>

        {/* Page Content */}
        <div className="px-16 py-6">
          <h1 className="text-3xl font-bold mb-6">Quiz 01 – App Development</h1>

          <table className="w-full text-left border">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Student Name</th>
                <th className="p-2">Registration No</th>
                <th className="p-2">Marks</th>
                <th className="p-2">Flag Incidents</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Student 1</td>
                <td className="p-2">21pwbcsxxxx</td>
                <td className="p-2">10/10</td>
                <td className="p-2">Yes</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">Review</td>
              </tr>
              <tr>
                <td className="p-2">Student 2</td>
                <td className="p-2">21pwbcsxxxx</td>
                <td className="p-2">06/10</td>
                <td className="p-2">No</td>
                <td className="p-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
