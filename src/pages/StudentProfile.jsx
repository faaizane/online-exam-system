// src/pages/ViewProfile.jsx
import React, { useRef, useState } from 'react';
import Sidebar from '../components/SSidebar';
import SHeader from '../components/SHeader'; // ✅ Import student header

const ViewProfile = () => {
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState('/user-profile.png');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Reusable Header */}
        <SHeader />

        {/* Page Content */}
        <div className="px-16 py-8">
          <h1 className="text-4xl font-bold text-[#002855] mb-6">My Profile</h1>

          <div className="bg-white rounded-xl shadow-md p-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#002855] shadow"
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 bg-[#002855] text-white px-2 py-1 text-xs rounded-full shadow hover:bg-blue-800"
                >
                  Change
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black text-sm">
              <div>
                <label className="block font-medium text-gray-600 mb-1">Full Name</label>
                <div className="p-3 bg-gray-100 rounded-lg">John Doe</div>
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-1">Registration No</label>
                <div className="p-3 bg-gray-100 rounded-lg">2021-CS-123</div>
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-1">Semester</label>
                <div className="p-3 bg-gray-100 rounded-lg">7th Semester</div>
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-1">Email</label>
                <div className="p-3 bg-gray-100 rounded-lg">john.doe@example.com</div>
              </div>
              <div className="sm:col-span-2">
                <label className="block font-medium text-gray-600 mb-1">Department</label>
                <div className="p-3 bg-gray-100 rounded-lg">Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
