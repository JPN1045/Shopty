import React from 'react'
import './DescBox.css'

const DescBox = () => {
  return (
    <div className="descBox">
      <div className="descBox-navigator">
        <div className="descBox-nav-box">Description</div>
        <div className="descBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descBox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet serves as a
          virtual marketplace where businesses and individuals showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenience accessibility, and the
          global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services as detaile
          descriptions, images, prices, and any available variable(e.g., sizes,
          colors).Each product usually has its own dedicated relevant
          information.
        </p>
      </div>
    </div>
  );
}

export default DescBox
