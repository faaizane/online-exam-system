// src/pages/AddStudent.jsx
import React from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

const AddStudent = () => {
  return (
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="px-16 py-10">
          <h1 className="text-4xl font-bold text-[#002855] mb-2">Add Student</h1>
          <p className="text-gray-600 mb-8 text-lg">Fill out the form below to register a new student</p>

          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Registration No</label>
                <input
                  type="text"
                  placeholder="e.g. 21pwbcsxxx"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Semester</label>
                <input
                  type="text"
                  placeholder="e.g. 7th"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Section</label>
                <input
                  type="text"
                  placeholder="e.g. A"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Department</label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="student@uetpeshawar.edu.pk"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
                />
              </div>
            </div>

            <div className="text-right">
              <button className="bg-[#002855] text-white px-6 py-2 rounded-lg hover:bg-[#001f47] transition">
                Add Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
