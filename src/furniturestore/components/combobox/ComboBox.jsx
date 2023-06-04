import React, {useState} from 'react'

import './ComboBox.css'

function TextField(props) {
  const [val, setVal] = useState(props.typ === 'edit'?props.initVal:'Kitchen');
  
  return (
    <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select id={props.id} value={val} onChange={e => {
          setVal(e.target.value)
          props.keepSync(e.target.value);
          }}>
         
            <option value='Kitchen'>Kitchen</option>
            <option value='Office'>Office</option>
            <option value='Living room'>Living room</option>
            <option value='Dining'>Dining</option>
            <option value='Partitions'>Partitions</option>
            <option value='Bed rooms'>Bed rooms</option>
            <option value='Wardrobes'>Wardrobes</option>
            <option value='Doors'>Doors</option>
            <option value='Ceiling'>Ceiling</option>
            <option value='Mattress'>Mattress</option>
            <option value='Painting'>Painting</option>
          </select>
    </div>
  )
}

export default TextField