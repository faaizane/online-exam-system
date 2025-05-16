// src/pages/TakeExam.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SSidebar';
import Header from '../components/SHeader'; // Reusable student header

const TakeExam = () => {
  const navigate = useNavigate();
  const [expandedSemester, setExpandedSemester] = useState('fall2024');

  const toggleSubjects = (semesterId) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  const handleSubjectClick = (subject) => {
    navigate('/take-exam/test-page', { state: { subject } });
  };

  return (
    <div className="min-h-screen flex flex-row bg-[#f9f9f9]">
      <Sidebar />

      <div className="ml-64 flex-1">
        {/* ✅ Reusable Header */}
        <Header />

        {/* Page Content */}
        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-2">Take Exam</h1>
          <p className="text-gray-600 mb-8 text-lg">Select a subject to begin your exam</p>

          {/* Semester Sections */}
          {[
            {
              id: 'fall2024',
              label: '2024 – Fall Semester',
              subjects: [
                'Mobile App Development',
                'Parallel & Distributed Computing',
                'Islamic Studies',
                'Machine Learning',
                'Computer Intelligence'
              ]
            },
            {
              id: 'spring2024',
              label: '2024 – Spring Semester',
              subjects: ['Data Structures', 'Computer Networks']
            },
            {
              id: 'fall2023',
              label: '2023 – Fall Semester',
              subjects: ['Operating Systems', 'Digital Logic Design']
            }
          ].map((section) => (
            <div key={section.id} className="mb-6">
              <button
                className="w-full bg-[#002855] text-white p-3 rounded flex justify-between items-center text-base"
                onClick={() => toggleSubjects(section.id)}
              >
                {section.label}
                <span className="text-sm">{expandedSemester === section.id ? '▲' : '▼'}</span>
              </button>
              {expandedSemester === section.id && (
                <div className="border border-gray-300 border-t-0 rounded-b overflow-hidden">
                  {section.subjects.map((subject) => (
                    <div
                      key={subject}
                      className="p-3 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                      onClick={() => handleSubjectClick(subject)}
                    >
                      {subject}
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
};

export default TakeExam;
