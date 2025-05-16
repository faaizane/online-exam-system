// src/pages/ViewResults.jsx
import React from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function ViewResults() {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />

        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">
            Quiz 01 – App Development
          </h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#002855] text-white text-sm font-light">
                <tr>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Registration No</th>
                  <th className="p-4">Marks</th>
                  <th className="p-4">Flag Incidents</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-black text-md">
                {[
                  {
                    name: 'Student 1',
                    reg: '21pwbcsxxxx',
                    marks: '10/10',
                    flag: 'Yes',
                    action: 'Review',
                  },
                  {
                    name: 'Student 2',
                    reg: '21pwbcsyyy',
                    marks: '06/10',
                    flag: 'No',
                    action: 'N/A',
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 border-t">
                    <td className="p-4">{row.name}</td>
                    <td className="p-4">{row.reg}</td>
                    <td className="p-4">{row.marks}</td>
                    <td className="p-4">{row.flag}</td>
                    <td className="p-4">
                      {row.action === 'Review' ? (
                        <button className="bg-[#003366] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
                          {row.action}
                        </button>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
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
