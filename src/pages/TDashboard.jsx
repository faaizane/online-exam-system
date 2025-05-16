// src/pages/TDashboard.jsx
import React from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader'; 

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-2">Dashboard</h1>
          <p className="text-gray-600 mb-8 text-lg">Welcome back, Teacher name</p>

          {/* Recent Exams */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#002855] mb-4">Recent Exams</h2>
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
                  {[
                    {
                      subject: 'App Development',
                      exam: 'Quiz 01',
                      date: '04-12-2024',
                      total: 50,
                      passed: 37,
                      failed: 13,
                    },
                    {
                      subject: 'Web Programming',
                      exam: 'Quiz 02',
                      date: '06-12-2024',
                      total: 48,
                      passed: 40,
                      failed: 8,
                    },
                    {
                      subject: 'Machine Learning',
                      exam: 'Midterm',
                      date: '10-12-2024',
                      total: 52,
                      passed: 45,
                      failed: 7,
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 border-t">
                      <td className="p-4">{row.subject}</td>
                      <td className="p-4">{row.exam}</td>
                      <td className="p-4">{row.date}</td>
                      <td className="p-4">{row.total}</td>
                      <td className="p-4">{row.passed}</td>
                      <td className="p-4">{row.failed}</td>
                      <td className="p-4">
                        <button className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cheating Incidents */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002855] mb-4">Recent Cheating Incidents</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#002855] text-white text-sm font-light">
                  <tr>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Registration No</th>
                    <th className="p-4">Exam No</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Semester</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-black text-md">
                  {[
                    {
                      name: 'Student 1',
                      reg: '21pwbcsxxxx',
                      exam: 'Quiz 01',
                      subject: 'Software Engineering',
                      semester: '5th',
                      date: '22-12-2024',
                    },
                    {
                      name: 'Student 2',
                      reg: '21pwbcsyyy',
                      exam: 'Quiz 02',
                      subject: 'Computer Networks',
                      semester: '6th',
                      date: '23-12-2024',
                    },
                    {
                      name: 'Student 3',
                      reg: '21pwbcszzz',
                      exam: 'Quiz 01',
                      subject: 'Operating Systems',
                      semester: '6th',
                      date: '21-12-2024',
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 border-t">
                      <td className="p-4">{row.name}</td>
                      <td className="p-4">{row.reg}</td>
                      <td className="p-4">{row.exam}</td>
                      <td className="p-4">{row.subject}</td>
                      <td className="p-4">{row.semester}</td>
                      <td className="p-4">{row.date}</td>
                      <td className="p-4">
                        <button className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                          View Video
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
}
