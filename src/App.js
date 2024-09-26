import React, { useState } from 'react';
import ProductListing from './components/ProductListing/ProductListing';


const App = () => {

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <div className="flex items-center space-x-4">
        </div>
      </div>

      <ProductListing />

    </div>
  );
};

export default App;
