// src/pages/CreateExam.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

export default function CreateExam() {
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

                {/* Main Form Section */}
                <div className="px-16 py-6 pb-4 flex flex-col min-h-full">
                    <h1 className="text-3xl font-bold mb-6">Create Exam</h1>

                    <form className="grid grid-cols-2 gap-6 mb-6">
                        <input type="text" placeholder="Year" className="border p-2 rounded" />
                        <input type="text" placeholder="Semester" className="border p-2 rounded" />
                        <input type="text" placeholder="Fall / Spring" className="border p-2 rounded" />
                        <input type="text" placeholder="Subject" className="border p-2 rounded" />
                        <input type="text" placeholder="Exam No." className="border p-2 rounded" />
                    </form>

                    {/* Question Box */}
                    <div className="border p-4 mb-4">
                        <h3 className="font-bold border-b pb-2 mb-4">Question</h3>
                        <div className="mb-2">⚪ Option 1 ❌</div>
                        <div className="mb-2">⚪ Option 2 ❌</div>
                        <div className="mb-2">⚪ Option 3 ❌</div>
                        <div className="text-gray-400">⚪ Add Option</div>
                        <div className="text-green-500 mt-4">✅ Answer Key</div>
                    </div>

                    {/* Add Questions */}
                    <button
                        type="button"
                        className="text-lg text-[#0073E6] flex items-center gap-2 mb-6"
                    >
                        <span className="text-2xl font-bold">+</span>
                        Add Questions
                    </button>

                    {/* Submit Button at the very end */}
                    <div className="flex justify-end">
                        <button className="bg-[#002855] text-white px-6 py-2 rounded hover:bg-[#001f47] transition">
                            Submit Exam
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
