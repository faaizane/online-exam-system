// src/pages/ReviewCheating.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

export default function ReviewCheating() {
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
          <h1 className="text-3xl font-bold mb-2">Review Cheating</h1>
          <p className="text-gray-600 mb-6">
            Below are the flagged incidents from ongoing or completed exams
          </p>

          <table className="w-full text-left border">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Student Name</th>
                <th className="p-2">Registration No</th>
                <th className="p-2">Exam No</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Semester</th>
                <th className="p-2">Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Student 1</td>
                <td className="p-2">21pwbcsxxxx</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">Software Engineering</td>
                <td className="p-2">5th</td>
                <td className="p-2">22-12-2024</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">View Video</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
