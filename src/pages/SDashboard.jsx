// src/pages/SDashboard.jsx
import React from 'react';
import Sidebar from '../components/SSidebar';
import StudentHeader from '../components/SHeader'; // New reusable header

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <StudentHeader />

        {/* Content */}
        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-2">Dashboard</h1>
          <p className="text-gray-600 text-lg mb-8">Welcome back, Student Name</p>

          {/* Upcoming Exams */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#002855] mb-4">Upcoming Exams</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#002855] text-white text-sm font-light">
                  <tr>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Exam No.</th>
                    <th className="p-4">Semester</th>
                    <th className="p-4">Scheduled Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-black text-md">
                  <tr className="hover:bg-gray-50 border-t">
                    <td className="p-4">App Development</td>
                    <td className="p-4">Quiz 02</td>
                    <td className="p-4">5th</td>
                    <td className="p-4">14-12-2024</td>
                    <td className="p-4">Scheduled</td>
                  </tr>
                  <tr className="hover:bg-gray-50 border-t">
                    <td className="p-4">App Development</td>
                    <td className="p-4">Quiz 03</td>
                    <td className="p-4">5th</td>
                    <td className="p-4">25-12-2024</td>
                    <td className="p-4">Scheduled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Results */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002855] mb-4">Recent Results</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#002855] text-white text-sm font-light">
                  <tr>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Exam No.</th>
                    <th className="p-4">Semester</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Score</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-black text-md">
                  {['Quiz 01', 'Quiz 01', 'Quiz 01'].map((exam, i) => (
                    <tr key={i} className="hover:bg-gray-50 border-t">
                      <td className="p-4">App Development</td>
                      <td className="p-4">{exam}</td>
                      <td className="p-4">5th</td>
                      <td className="p-4">01-12-2024</td>
                      <td className="p-4">85/100</td>
                      <td className="p-4">
                        <button className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
