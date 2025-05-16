// src/pages/CreateExam.jsx
import React from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function CreateExam() {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />

        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">Create Exam</h1>

          {/* Exam Form */}
          <form className="grid grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Year" className="border p-2 rounded" />
            <input type="text" placeholder="Semester" className="border p-2 rounded" />
            <input type="text" placeholder="Fall / Spring" className="border p-2 rounded" />
            <input type="text" placeholder="Subject" className="border p-2 rounded" />
            <input type="text" placeholder="Exam No." className="border p-2 rounded" />
          </form>

          {/* Question Box */}
          <div className="border p-4 rounded-xl shadow-sm bg-white mb-4">
            <h3 className="font-bold border-b pb-2 mb-4">Question</h3>
            <div className="mb-2">⚪ Option 1 ❌</div>
            <div className="mb-2">⚪ Option 2 ❌</div>
            <div className="mb-2">⚪ Option 3 ❌</div>
            <div className="text-gray-400">⚪ Add Option</div>
            <div className="text-green-500 mt-4">✅ Answer Key</div>
          </div>

          {/* Add Question Button */}
          <button className="text-[#0073E6] text-md flex items-center gap-2 font-medium mb-6">
            ➕ Add Questions
          </button>

          {/* Submit Button */}
          <button className="bg-[#002855] text-white px-6 py-2 rounded shadow hover:bg-[#001f47] transition">
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
}
