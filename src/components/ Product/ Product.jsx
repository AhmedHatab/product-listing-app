
import React from 'react';
const Product = ({ product }) => {
  return (
    <div className=" rounded-lg max-w-sm overflow-hidden my-6 w-[326px] h-[406px]">
      {/* Image section */}
      <div className="w-[300px] h-[290px] overflow-hidden bg-slate-100">
        <img src= {product.image ? product.image : "https://i.imgur.com/1o3KcN6.png "} alt={product.name} className="object-cover w-[300px] h-[290px]  rounded-tl-md " />
      </div>

      {/* Product info */}
      <div className="p-4">
        
        <div className="flex items-center justify-between mt-2">
        <h2 className="font-lexend-deca text-[13px] font-light leading-[15px] text-left">{product.name}</h2>
          {/* Heart icon */}
          <button className="text-gray-300 hover:text-gray-300 focus:outline-none">
            <svg
              className="w-7 h-7 border"
              fill="none"
              stroke="#171717"
              viewBox="-4 1 33 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        </div>
        <span className="w-[326px] h-[26px] top-[15px] gap-[9px] ">£{product.price.toFixed(2)}</span>

        {/* User info */}
        <div className="flex items-center mt-2">
          <img
            src="https://i.imgur.com/3fet72d.jpeg"
            alt="User"
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="font-lexend-deca text-[10px] font-normal leading-[20px] text-left pl-1">Josie Parker</span>
        </div>
      </div>
    </div>
  );
};

export default Product;


