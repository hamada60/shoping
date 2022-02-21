import React from 'react';
import '../../css/Filter/Filter.css';

export default function Filter({products, productsNumber, handelFilterBySize, size, handelFilterBySort, sort}) {
  return (
    <div className='border border-2 rounded-3 shadow-sm p-3 mb-5 bg-body rounded m-3'>
        <h3 className='filter-title'>Filter</h3>
        <p>Number Of Products: <span className='bg-secondary text-white p-2 rounded-circle'>{productsNumber}</span> Product</p>
        <div className='m-4'>
            <span>Filter By Size</span>
            <select className="form-select" value={size} onChange={handelFilterBySize} aria-label="Default select example">
                <option selected disable value="ALL" >ALL</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>
        </div>
        <div className='m-4'>
            <span>Order</span>
            <select className="form-select" value={sort} onChange={handelFilterBySort} aria-label="Default select example">
                <option value='latest'>Latest</option>
                <option value='lowest'>Lowest</option>
                <option value='highest'>Highest</option>
            </select>
        </div>
    </div>
  )
}
