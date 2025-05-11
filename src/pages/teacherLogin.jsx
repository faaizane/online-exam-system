import React from 'react';

export default function TeacherLogin() {
    return (
        <div
            className="relative w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-image.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                {/* Login Card */}
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8" style={{ height: "600px", width: "578px" }}>
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-blue-900 uppercase">
                            University of Engineering &<br />Technology Peshawar
                        </h2>
                        <p className="text-gray-600 mt-2">Welcome to Exam Portal</p>
                    </div>

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/Logo.png"
                            alt="University Logo"
                            className="h-24 w-24 object-contain"
                        />
                    </div>

                    {/* Form */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                                Teacher ID
                            </label>
                            <input
                                type="text"
                                placeholder="Teacher ID"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
