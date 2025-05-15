import React from 'react';

const TLogin = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[1.5px]"
        style={{ backgroundImage: "url('/bg-image.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Login Container */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[550px] h-[530px] rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] bg-white z-10">
        {/* Top Section */}
        <div className="bg-[#17046d] h-[204px] text-center p-5 text-white relative">
          <h2 className="text-[19px] pt-[10px] mb-[5px]">
            UNIVERSITY OF ENGINEERING AND TECHNOLOGY PESHAWAR
          </h2>
          <h3 className="text-[18px] pt-[7px] mb-3 text-[#bbbbbb]">
            Welcome to Exam Portal
          </h3>

          {/* Logo */}
          <div className="absolute -bottom-[81px] left-1/2 transform -translate-x-1/2 w-[145px] h-[145px] rounded-full bg-white border border-white flex items-center justify-center overflow-hidden">
            <img src="/LOGO.png" alt="Logo" className="w-[90%] h-auto" />
          </div>
        </div>

       {/* Form Section */}
<div className="pt-[70px] px-20 pb-[60px] bg-white text-center">
  <div className="mb-2 text-left">
    <label htmlFor="regno" className="block text-[13.5px] font-semibold mb-1">
      Registration Number:
    </label>
    <input
      type="text"
      id="regno"
      placeholder="Reg num"
      required
      className="w-full p-2 border-[2px] border-[#ccc] rounded-[5px] text-[13px]"
    />
  </div>

  <div className="mb-5 text-left">
    <label htmlFor="password" className="block text-[13.5px] font-semibold mb-1">
      Password:
    </label>
    <input
      type="password"
      id="password"
      placeholder="Password"
      required
      className="w-full p-2 border-[2px] border-[#ccc] rounded-[5px] text-[13px]"
    />
  </div>

  <button className="w-full p-2 bg-[#0e008f] text-white border-none rounded-[5px] text-[16px] cursor-pointer hover:bg-[#3f29ff]">
    Login
  </button>
</div>

      </div>
    </div>
  );
};

export default TLogin;
