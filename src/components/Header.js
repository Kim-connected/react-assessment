import React from 'react';

function Header() {
  return(
    <div className="header">
      <div className="header-tools-wrapper">
        <div className="cart-wrapper">Cart</div>
      </div>
      <div className="header-main-content">Ascii Faces
        <div className="sort">
        Sort by
          <input type="radio" value="Male" name="gender" /> Size
          <input type="radio" value="Female" name="gender" /> Price
          <input type="radio" value="Other" name="gender" /> ID
        </div>
      </div>

    </div>
  )

}

export default Header
