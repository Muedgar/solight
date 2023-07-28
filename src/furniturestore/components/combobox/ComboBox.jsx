import React, {useState} from 'react'

import './ComboBox.css'

function TextField(props) {
  const [val, setVal] = useState(props.typ === 'edit'?props.initVal:'Kitchen');

  return (
    <div className='sofa_light_dashboard_furniturestore_components_textfield'>
         {props.name==='Furniture'? 
         <>
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
         </>:
         <>
          <select id={props.id} value={val} onChange={e => {
          setVal(e.target.value)
          props.keepSync(e.target.value);
          }}>
            <option value='Sweet dream'>Sweet dream</option>
            <option value='Prestige'>Prestige</option>
            <option value='Lalasalama'>Lalasalama</option>
            <option value='G . Classic'>G . Classic</option>
            <option value='G. Standard'>G. Standard</option>
            <option value='Comfy'>Comfy</option>
            <option value='Tuff tnx'>Tuff tnx</option>
            <option value='Tuff covered'>Tuff covered</option>
            <option value='Rwanda foamD25'>Rwanda foamD25</option>
            <option value='Rwanda D20'>Rwanda D20</option>
            <option value='Rwanda foam D18'>Rwanda foam D18</option>
            <option value='Rwanda foam D16'>Rwanda foam D16</option>
            <option value='Inzozi'>Inzozi</option>
            <option value='Dada mattress'>Dada mattress</option>
            <option value='Relax jack'>Relax jack</option>
            <option value='Relax poyeely'>Relax poyeely</option>
            <option value='Euro foam'>Euro foam</option>
          </select>
         </>}
    </div>
  )
}

export default TextField