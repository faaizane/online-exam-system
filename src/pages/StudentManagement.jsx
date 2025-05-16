import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function StudentManagement() {
  const navigate = useNavigate();

  const handleFileImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle file parsing/upload here
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Reusable Header */}
        <Header />

        {/* Page Content */}
        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">Student Management</h1>

          {/* Button Row */}
          <div className="flex gap-4 mb-4">
            {/* Import CSV */}
            <div>
              <label
                htmlFor="csv-upload"
                className="cursor-pointer bg-[#002855] text-white px-4 py-2 rounded shadow-sm hover:shadow-md hover:bg-[#001f47] transition inline-block"
              >
                Import CSV
              </label>
              <input
                type="file"
                id="csv-upload"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="hidden"
                onChange={handleFileImport}
              />
            </div>

            {/* Add Student */}
            <button
              onClick={() => navigate('/add-student')}
              className="bg-[#002855] text-white px-4 py-2 rounded shadow-sm hover:shadow-md hover:bg-[#001f47] transition"
            >
              Add Students
            </button>
          </div>

          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for a student by name or registration number"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#002855] text-white font-light">
                <tr>
                  <th className="p-4">Registration No.</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Semester</th>
                  <th className="p-4">Section</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-black text-md">
                <tr className="hover:bg-gray-100 border-t border-gray-200 transition">
                  <td className="p-4">21pwbcsxxxx</td>
                  <td className="p-4">Student 1</td>
                  <td className="p-4">Web Programming</td>
                  <td className="p-4">7th</td>
                  <td className="p-4">A</td>
                  <td className="p-4">Computer Science</td>
                  <td className="p-4">🔍 👤</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
