
import React, { useState } from 'react';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';

function SellItem() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return (
    
        <>
                <div className="ml-3">
          <button 
            className="bg-[#D9F99D] text-black w-[132px] h-[44px] top-[85px] left-[1368px] p-[11px] px-[23px] gap-[10px] rounded-l-[4px] mt-2 sm:mt-0" 
            onClick={openForm}
          >
           <i className="pr-2" >  + </i> 
           <span className={'font-lexend-deca text-[14px] font-light leading-[22px] text-center ' }>Sell Item</span>
          </button>
        </div>
        {isFormOpen && <AddProductForm onClose={closeForm} />}
        
        
        </>
  )
}

export default SellItem