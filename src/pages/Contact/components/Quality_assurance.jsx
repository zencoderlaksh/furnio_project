import React from 'react'

const Quality_assurance = () => {
  return (
    <div className="bg-[#faf3ea] w-screen flex flex-col md:flex-row items-center md:items-start justify-between p-5 md:p-[50px] gap-8 md:gap-6"> {/* Added items-center for mobile, gap-8 for mobile stacking */}
      <div className="feature-item flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-[10px] text-center md:text-left"> {/* Centered items and text for mobile */}
        <img src='/Furnio---The-Furniture-Expert/assets/trophy.png' className="h-[50px] md:h-[60px]"/> {/* Slightly smaller icon for mobile */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold">High Quality</h3>
          <p className="text-gray-500 text-sm md:text-base">crafted from top materials</p>
        </div>
      </div>

      <div className="feature-item flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-[10px] text-center md:text-left">
        <img src='/Furnio---The-Furniture-Expert/assets/guarantee.png' className="h-[50px] md:h-[60px]"/>
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Warranty Protection</h3>
          <p className="text-gray-500 text-sm md:text-base">Over 2 years </p>
        </div>
      </div>

      <div className="feature-item flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-[10px] text-center md:text-left">
        <img src='/Furnio---The-Furniture-Expert/assets/shipping.png' className="h-[50px] md:h-[60px]"/>
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Free Shipping</h3>
          <p className="text-gray-500 text-sm md:text-base">Orders over 150$ </p>
        </div>
      </div>

      <div className="feature-item flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-[10px] text-center md:text-left">
        <img src='/Furnio---The-Furniture-Expert/assets/customer-support.png' className="h-[50px] md:h-[60px]"/>
        <div>
          <h3 className="text-lg md:text-xl font-semibold">24 / 7</h3>
          <p className="text-gray-500 text-sm md:text-base">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default Quality_assurance