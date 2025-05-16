// src/pages/TestPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/SSidebar';
import SHeader from '../components/SHeader';

const TestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  const subject = location.state?.subject || 'Mobile App Development';
  const semester = '2024 - Fall Semester';

  return (
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <SHeader />

        {/* Content */}
        <div className="px-16 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-[#002855]">Take Exam</h1>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#2c3e50] bg-white hover:bg-[#e5e7eb] border border-gray-300 px-4 py-2 rounded-full shadow transition duration-200"
            >
              <span className="text-xl">←</span>
              <span className="font-semibold text-sm">Back</span>
            </button>
          </div>

          {/* Exam Table */}
          <h2 className="text-2xl font-semibold text-[#002855] mb-4">Exam Details</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#002855] text-white text-sm font-light">
                <tr>
                  <th className="p-4">Subject Name</th>
                  <th className="p-4">Exam No</th>
                  <th className="p-4">Semester</th>
                  <th className="p-4">Total Time</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-black text-md">
                <tr className="border-t hover:bg-gray-50">
                  <td className="p-4">{subject}</td>
                  <td className="p-4">1</td>
                  <td className="p-4">{semester}</td>
                  <td className="p-4">10 minutes</td>
                  <td className="p-4">{currentDate}</td>
                  <td className="p-4">
                    <button
                      onClick={() => navigate('/give-exam')}
                      className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-[#1e8449] transition"
                    >
                      Start Test
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
