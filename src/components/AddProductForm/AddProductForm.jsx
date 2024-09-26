import React, { useState } from 'react';

const AddProductForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  // validate Form

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Title is required';
    if (!description) formErrors.description = 'Description is required';
    if (!category) formErrors.category = 'Category is required';
    if (!price || isNaN(price)) formErrors.price = 'Valid price is required';
    if (!image) formErrors.image = 'Image is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newProduct = { name, description, category, price: parseFloat(price), image };
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.reload(); 
  };


  return (
 <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
  <div className="bg-white p-4 md:p-6 rounded-lg relative w-full max-w-sm md:max-w-lg mx-2 sm:mx-4 h-auto max-h-[90vh] overflow-y-auto">
    <button className="absolute top-2 right-2 text-base font-medium" onClick={onClose}>x</button>
    <h2 className="text-xl md:text-2xl mb-4 text-center">Sell an Item</h2>
    <form onSubmit={handleSubmit}>
      
      <div className="mb-4">
        <label className="block text-sm md:text-base mb-1">Upload Photo</label>
        <div className="border-2 border-gray-200 rounded-lg h-[160px] flex items-center justify-center flex-col">
        <label  for={'file_input'} className="bg-[#ffffff] text-[#161616] py-2 px-4 rounded-lg text-sm font-medium border-gray-200 border-2 ">Upload Photo</label>
        <input id={'file_input'} type="file" onChange={handleImageUpload} className="hidden" />
        </div>
        {errors.image && <p className="text-red-500 text-xs md:text-sm">{errors.image}</p>}
        {image && <img src={image} alt="Preview" className="mt-4 w-full h-40 md:h-48 object-cover rounded-md" />}
      </div>

      <div className="mb-4">
        <label className="block text-sm md:text-base mb-1">Title</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-gray-200 border-2 p-2 rounded-md text-sm md:text-base"
        />
        {errors.name && <p className="text-red-500 text-xs md:text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm md:text-base mb-1">Describe your item</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-gray-200 border-2 p-2 rounded-md text-sm md:text-base"
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs md:text-sm">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm md:text-base mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border-gray-200 border-2 p-2 rounded-md text-sm md:text-base bg-white"
        >
          <option value="">Select</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
        {errors.category && <p className="text-red-500 text-xs md:text-sm">{errors.category}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm md:text-base mb-1">Item Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border-2 p-2  border-gray-200 rounded-md text-sm md:text-base"
        />
        {errors.price && <p className="text-red-500 text-xs md:text-sm">{errors.price}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-[#D9F99D] text-black p-2 rounded-lg hover:bg-lime-400 transition-colors duration-200 text-sm md:text-base"
      >
        Upload Item
      </button>
    </form>
  </div>
</div> 



  );
};

export default AddProductForm;
