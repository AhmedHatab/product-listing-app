import React, { useState, useEffect } from 'react';
import Product from '../ Product/ Product';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/solid';
import SellItem from '../SellItem/SellItem';


const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // search logic

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    const sortedProducts = [...products];

    if (selectedOption === 'name-asc') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === 'name-desc') {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedOption === 'price-low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === 'price-high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

   // Pagination logic
   const indexOfLastProduct = currentPage * itemsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
 
   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <div className="flex md:justify-between justify-center items-center flex-wrap ">
        <div className="relative  ">
          <input
            type="text"
            placeholder="Search"
            className="border py-2 px-4  mb-3 rounded-lg "
            onChange={handleSearch}
          />
          <SearchIcon className="w-5 h-5 text-gray-500 absolute right-2 top-2" />
        </div>
        <div className="flex justify-center items-center  flex-wrap">
          <div className="p-3 font-lexend-deca text-[14px] font-normal leading-[22px] text-left">sort by</div>
          <select id={'selectColor'} onChange={handleSortChange} className=" border w-52  p-2 bg-white focus:outline-none hover:bg-transparent  ">
            <option value="name-asc"> A-Z</option>
            <option value="name-desc"> Z-A</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low" >Price: High to Low</option>
          </select>
          <SellItem/>
        </div>
        
      </div>

            {/* Product Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3  xl:grid-cols-4 gap-0">
        {currentProducts.map((product, index) => (
          <Product key={index} product={product} /> 
        ))}
      </div>

       {/* Pagination */}
       <div className="flex justify-between items-center mt-4">
        <button 
          className=" relative py-2 px-4 " 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          <span className=" text-2xl absolute bottom-1.5  right-14 mr-3"> &#8592;  </span>
        <span className={'text-sm '} > Previous</span>
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`py-2 px-4 ${page === currentPage ? 'border border-lime-400': 'border-none' }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button 
          className=" relative py-2 px-4" 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
                    <span className=" text-2xl absolute bottom-1.5  left-11 mr-3"> &#8594; </span>
                    <span className={'text-sm '} >           Next 
                    </span>
        </button>
      </div>
      
    
    </>
    
  );
};

export default ProductListing;
