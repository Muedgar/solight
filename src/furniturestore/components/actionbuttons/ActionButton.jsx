import React, {useState} from 'react'

import './ActionButton.css'


function ActionButton(props) {
  const [saveClicked, setSaveClicked] = useState(false);
  return (
    <div className='sofa_light_dashboard_furniturestore_components_product_action_button'>
        <button onClick={(e) => {
          props.handleSave(e)
          setSaveClicked(false)
        }}>Edit Product {saveClicked?
        <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
        :""}</button>
    </div>
  )
}

export default ActionButton