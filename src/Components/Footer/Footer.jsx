import React from 'react';

import './Footer.css';

function Footer() {
  return (

    <div className="footerParentDiv">
      <div className="content">

        <div className='sectionFooter'>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "1%" }}>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "1%" }}>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>

        <div className='sectionFooter2'>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer">
        <p style={{marginLeft:"1%"} }>Help - Sitemap</p>
        <p style={{marginRight:"2%"}}>All rights reserved © 2006-2024 OLX</p>
      </div>

    </div>
  );
}

export default Footer;