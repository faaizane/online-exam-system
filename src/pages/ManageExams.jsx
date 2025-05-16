// src/pages/ManageExams.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function ManageExams() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({
    '2024-Fall': true,
    '2025-Spring': true,
    '2024-Spring': false,
    '2023-Fall': false,
  });

  const toggleSection = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sections = [
    { key: '2024-Fall', title: '2024 – Fall Semester', semesters: ['1st Semester', '7th Semester'] },
    { key: '2025-Spring', title: '2025 – Spring Semester', semesters: ['4th Semester', '8th Semester'] },
    { key: '2024-Spring', title: '2024 – Spring Semester', semesters: [] },
    { key: '2023-Fall', title: '2023 – Fall Semester', semesters: [] },
  ];

  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />

        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">Manage Exams</h1>

          {/* Create Exam Button */}
          <div className="mb-4">
            <button
              className="bg-[#002855] text-white px-4 py-2 rounded shadow-sm hover:shadow-md hover:bg-[#001f47] transition"
              onClick={() => navigate('/createexam')}
            >
              Create Exam
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for an exam"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Collapsible Semester Sections */}
          {sections.map((section) => (
            <div key={section.key} className="mb-4 border border-[#002855] rounded-xl overflow-hidden bg-white shadow-sm">
              <div
                className="bg-[#002855] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.key)}
              >
                <span className="font-semibold">{section.title}</span>
                <span className="text-lg">{expanded[section.key] ? '▲' : '▼'}</span>
              </div>

              {expanded[section.key] && section.semesters.length > 0 && (
                <div className="border-t border-[#ddd] bg-white">
                  {section.semesters.map((sem, index) => (
                    <div
                      key={index}
                      onClick={() => navigate('/examschedule')}
                      className="px-4 py-2 border-t hover:bg-gray-100 cursor-pointer transition"
                    >
                      {sem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
