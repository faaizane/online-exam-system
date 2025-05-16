// src/pages/ExamSchedule.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function ExamSchedule() {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <Sidebar />

      <div className="ml-64 flex-1">
        <Header />

        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">Upcoming Exam</h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <table className="w-full text-left">
              <thead className="bg-[#002855] text-white text-sm font-light">
                <tr>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Exam No.</th>
                  <th className="p-4">Scheduled Exam Date</th>
                  <th className="p-4">Total Students</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Edit</th>
                </tr>
              </thead>
              <tbody className="text-black text-md">
                {[
                  {
                    subject: 'App Development',
                    exam: 'Quiz 01',
                    date: '14–12–2024',
                    students: 50,
                    status: 'Scheduled',
                  },
                  {
                    subject: 'App Development',
                    exam: 'Quiz 01',
                    date: '25–12–2024',
                    students: 50,
                    status: 'Scheduled',
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 border-t">
                    <td className="p-4">{row.subject}</td>
                    <td className="p-4">{row.exam}</td>
                    <td className="p-4">{row.date}</td>
                    <td className="p-4">{row.students}</td>
                    <td className="p-4">{row.status}</td>
                    <td className="p-4 text-lg">✏️</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h1 className="text-4xl font-bold text-[#002855] mb-6">Completed Exam</h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#002855] text-white text-sm font-light">
                <tr>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Exam No.</th>
                  <th className="p-4">Exam Date</th>
                  <th className="p-4">Total Students</th>
                  <th className="p-4">Passed</th>
                  <th className="p-4">Failed</th>
                  <th className="p-4">View Results</th>
                </tr>
              </thead>
              <tbody className="text-black text-md">
                {[1, 2].map((_, i) => (
                  <tr key={i} className="hover:bg-gray-50 border-t">
                    <td className="p-4">App Development</td>
                    <td className="p-4">Quiz 01</td>
                    <td className="p-4">04–12–2024</td>
                    <td className="p-4">50</td>
                    <td className="p-4">37</td>
                    <td className="p-4">13</td>
                    <td className="p-4">
                      <Link to="/viewresults">
                        <button className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
