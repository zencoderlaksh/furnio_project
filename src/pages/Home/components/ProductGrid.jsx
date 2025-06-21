import React from "react";

function ProductGrid() {
  return (
    <div className="productgrid-wrapper mt-5 mb-20 overflow-x-hidden">
      <div className="sub-heading flex justify-center">
        <h5>Share your setup with</h5>
      </div>
      <div className="heading flex justify-center mb-5">
        <h2>#FuniroFurniture</h2>
      </div>

      {/* Full layout for md and up */}
      <div className="image-colage hidden md:flex">
        <div className="left">
          <div className="left-top flex">
            <img className="mr-5" src="/Furnio---The-Furniture-Expert/assets/Rectangle36.png" alt="" />
            <img
              className="h-80 w-auto mt-20"
              src="/Furnio---The-Furniture-Expert/assets/Rectangle38.png"
              alt=""
            />
          </div>
          <div className="left-bottom flex">
            <img className="mt-3" src="/Furnio---The-Furniture-Expert/assets/Rectangle37.png" alt="" />
            <img
              className="mt-3 ml-5 h-60 w-auto"
              src="/Furnio---The-Furniture-Expert/assets/Rectangle39.png"
              alt=""
            />
          </div>
        </div>

        <div className="middle">
          <img
            className="ml-5 mt-45 h-auto w-85"
            src="/Furnio---The-Furniture-Expert/assets/Rectangle40.png"
            alt=""
          />
        </div>

        <div className="right">
          <div className="right-top flex">
            <img
              className="ml-5 w-auto h-90 mt-30"
              src="/Furnio---The-Furniture-Expert/assets/Rectangle43.png"
              alt=""
            />
            <img className="ml-5" src="/Furnio---The-Furniture-Expert/assets/Rectangle45.png" alt="" />
          </div>
          <div className="right-bottom flex">
            <img
              className="ml-5 mt-3 h-auto w-51"
              src="/Furnio---The-Furniture-Expert/assets/Rectangle41.png"
              alt=""
            />
            <img
              className="mt-3 ml-5 h-60 w-auto"
              src="/Furnio---The-Furniture-Expert/assets/Rectangle44.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Mobile layout with only 4 images */}
      <div className="image-colage md:hidden grid grid-cols-2 gap-4 px-4">
        <img src="/Furnio---The-Furniture-Expert/assets/Rectangle44.png" alt="Furniro furniture gallery item" className="w-full aspect-square object-cover rounded-md" />
        <img src="/Furnio---The-Furniture-Expert/assets/Rectangle38.png" alt="Furniro furniture gallery item" className="w-full aspect-square object-cover rounded-md" />
        <img src="/Furnio---The-Furniture-Expert/assets/Rectangle40.png" alt="Furniro furniture gallery item" className="w-full aspect-square object-cover rounded-md" />
        <img src="/Furnio---The-Furniture-Expert/assets/Rectangle43.png" alt="Furniro furniture gallery item" className="w-full aspect-square object-cover rounded-md" />
      </div>
    </div>
  );
}

export default ProductGrid;
