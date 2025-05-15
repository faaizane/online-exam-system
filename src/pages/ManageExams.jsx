// src/pages/ManageExams.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

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
                    <h1 className="text-3xl font-bold mb-6">Manage Exams</h1>

                    {/* Create Exam Button */}
                    <div className="mb-4">
                        <button
                            className="bg-[#002855] text-white px-4 py-2 rounded hover:bg-[#001f47] transition"
                            onClick={() => navigate('/createexam')}
                        >
                            Create Exam
                        </button>
                    </div>

                    {/* Search Bar Below Button */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search for an exam"
                            className="w-full border px-4 py-2 rounded"
                        />
                    </div>

                    {/* Collapsible Sections */}
                    {sections.map((section) => (
                        <div key={section.key} className="mb-4 border border-[#002855]">
                            <div
                                className="bg-[#002855] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSection(section.key)}
                            >
                                <span className="font-semibold">{section.title}</span>
                                <span className="text-lg">{expanded[section.key] ? '▲' : '▼'}</span>
                            </div>

                            {expanded[section.key] && section.semesters.length > 0 && (
                                <div className="border border-t-0">
                                    {section.semesters.map((sem, index) => (
                                        <Link
                                            to="/examschedule"
                                            key={index}
                                            className="block px-4 py-2 border-t hover:bg-gray-100 text-black"
                                        >
                                            {sem}
                                        </Link>
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
