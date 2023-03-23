import React from 'react'

import './Category.css'

function Category() {
  const categories = [['All',25], ['Accessories',25], ['Appliances',25], ['Bags',25], ['Electronic',25], ['Entertainment',25], ['Induction',25]]
  return (
    <div className='sofa_light_dashboard_furniturestore_components_category'>
        <p className='sizeOne'>Category</p>
        <ul>
            {categories.map((category,ky) => (
                <li className='sizeTwo' key={ky}><span>{category[0]}</span><span>({category[1]})</span></li>
            ))}
        </ul>
    </div>
  )
}

export default Category