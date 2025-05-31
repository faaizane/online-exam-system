// // src/pages/CreateExam.jsx
// import React from 'react';
// import Sidebar from '../components/TSidebar';
// import Header from '../components/THeader';

// export default function CreateExam() {
//   return (
//     <div className="flex min-h-screen bg-[#f9f9f9]">
//       <Sidebar />
//       <div className="ml-64 flex-1">
//         <Header />

//         <div className="px-16 py-8">
//           <h1 className="text-4xl font-bold text-[#002855] mb-6">Create Exam</h1>

//           {/* Exam Form */}
//           <form className="grid grid-cols-2 gap-6 mb-6">
//             <input type="text" placeholder="Year" className="border p-2 rounded" />
//             <input type="text" placeholder="Semester" className="border p-2 rounded" />
//             <input type="text" placeholder="Fall / Spring" className="border p-2 rounded" />
//             <input type="text" placeholder="Subject" className="border p-2 rounded" />
//             <input type="text" placeholder="Exam No." className="border p-2 rounded" />
//           </form>

//           {/* Question Box */}
//           <div className="border p-4 rounded-xl shadow-sm bg-white mb-4">
//             <h3 className="font-bold border-b pb-2 mb-4">Question</h3>
//             <div className="mb-2">⚪ Option 1 ❌</div>
//             <div className="mb-2">⚪ Option 2 ❌</div>
//             <div className="mb-2">⚪ Option 3 ❌</div>
//             <div className="text-gray-400">⚪ Add Option</div>
//             <div className="text-green-500 mt-4">✅ Answer Key</div>
//           </div>

//           {/* Add Question Button */}
//           <button className="text-[#0073E6] text-md flex items-center gap-2 font-medium mb-6">
//             ➕ Add Questions
//           </button>

//           {/* Submit Button */}
//           <button className="bg-[#002855] text-white px-6 py-2 rounded shadow hover:bg-[#001f47] transition">
//             Submit Exam
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/CreateExam.jsx
import React, { useState } from 'react';
import Sidebar from '../components/TSidebar';
import Header from '../components/THeader';

export default function CreateExam() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(o => !o);

  return (
    <div className="min-h-screen flex bg-[#f9f9f9] overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col [@media(min-width:845px)]:ml-64">
        <Header toggleSidebar={toggleSidebar} />

        <div className="px-2 md:px-4 lg:px-16 py-4 md:py-8 space-y-6">
          <h1 className="text-[22px] md:text-4xl font-bold text-[#002855]">
            Create Exam
          </h1>

          {/* Exam Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Year"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
            />
            <input
              type="text"
              placeholder="Semester"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
            />
            <input
              type="text"
              placeholder="Fall / Spring"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855]"
            />
            <input
              type="text"
              placeholder="Exam No."
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002855] md:col-span-2"
            />
          </form>

          {/* Question Box */}
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <h3 className="text-[16px] md:text-2xl font-semibold border-b pb-2 mb-4">
              Question
            </h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex justify-between">
                <span>⚪ Option 1</span>
                <span>❌</span>
              </div>
              <div className="flex justify-between">
                <span>⚪ Option 2</span>
                <span>❌</span>
              </div>
              <div className="flex justify-between">
                <span>⚪ Option 3</span>
                <span>❌</span>
              </div>
              <div className="text-gray-400">⚪ Add Option</div>
              <div className="text-green-500">✅ Answer Key</div>
            </div>
          </div>

          {/* Add Question & Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button className="flex items-center gap-2 text-[#0073E6] font-medium text-[16px] md:text-lg">
              ➕ Add Questions
            </button>
            <button className="bg-[#002855] text-white px-6 py-2 rounded-lg hover:bg-[#001f47] transition">
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
