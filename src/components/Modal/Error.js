import React from 'react'
import notfound from '../../Image/notfound.png';
import './Error.css';

function Error({children}) {
  return (
    <div className="error">
      <div>
        <img src={notfound} alt="not found" />
      </div>
      <p>{children}</p>
    </div>
  )
}

export default Error
