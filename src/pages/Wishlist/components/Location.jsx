import React from 'react';

const Location = ({ title = 'CART' }) => {
  return (
    <div className="relative">
      <div className="w-screen h-[300px] bg-[url('/Furnio---The-Furniture-Expert/assets/cartimg.jpg')] bg-cover bg-center blur-[2px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center px-4">
        <img src="/Furnio---The-Furniture-Expert/assets/Furnio-logo.png" className="h-[50px] w-[50px] mb-2" alt="Logo" />
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">{title}</h1>
        <h6 className="text-sm sm:text-base text-gray-700">
          <span className="font-bold">Home &gt;</span> {title}
        </h6>
      </div>
    </div>
  );
};

export default Location;
