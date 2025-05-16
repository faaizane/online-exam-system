// src/pages/ReviewCheating.jsx
import React from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function ReviewCheating() {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />

        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-2">Review Cheating</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Below are the flagged incidents from ongoing or completed exams.
          </p>

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
        </div>
      </div>
    </div>
  );
}
