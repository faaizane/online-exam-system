// src/pages/ExamSchedule.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function ExamSchedule() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 bg-white">
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
          <h1 className="text-3xl font-bold mb-6">Upcoming Exam</h1>

          {/* Upcoming Exam Table */}
          <table className="w-full text-left border mb-12">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Subject</th>
                <th className="p-2">Exam No.</th>
                <th className="p-2">Scheduled Exam Date</th>
                <th className="p-2">Total Students</th>
                <th className="p-2">Status</th>
                <th className="p-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">App Development</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">14–12–2024</td>
                <td className="p-2">50</td>
                <td className="p-2">Scheduled</td>
                <td className="p-2">✏️</td>
              </tr>
              <tr>
                <td className="p-2">App Development</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">25–12–2024</td>
                <td className="p-2">50</td>
                <td className="p-2">Scheduled</td>
                <td className="p-2">✏️</td>
              </tr>
            </tbody>
          </table>

          <h1 className="text-3xl font-bold mb-6">Completed Exam</h1>

          {/* Completed Exam Table */}
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-[#002855] text-white">
                <th className="p-2">Subject</th>
                <th className="p-2">Exam No.</th>
                <th className="p-2">Exam Date</th>
                <th className="p-2">Total Students</th>
                <th className="p-2">Passed</th>
                <th className="p-2">Failed</th>
                <th className="p-2">View Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">App Development</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">04–12–2024</td>
                <td className="p-2">50</td>
                <td className="p-2">37</td>
                <td className="p-2">13</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">
                  <Link to="/viewresults">View</Link>
                </td>
              </tr>
              <tr>
                <td className="p-2">App Development</td>
                <td className="p-2">Quiz 01</td>
                <td className="p-2">04–12–2024</td>
                <td className="p-2">50</td>
                <td className="p-2">37</td>
                <td className="p-2">13</td>
                <td className="p-2 text-blue-600 underline cursor-pointer">
                  <Link to="/viewresults">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
