import React from 'react'
import loader from '../../Image/loader.png';

function Spinner() {
  return (
    <div className='spinner'>
      <img src={loader} alt="loader" />
    </div>
  )
}

export default Spinner
