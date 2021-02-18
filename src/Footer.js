import React from 'react';
import './Footer.css';
import logoImgFooter from "../src/Image/duzonBlack.png";

function Footer() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-around p-10">
        <a href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
          <img width="30%" src={logoImgFooter} alt="logoImgFooter"/>
        </a>
      
        <div className="mt-10 text-lg text-blue-800 lg:mt-0">
            Copyright 2021 Duzon
        </div>
      </div>
    )
}

export default Footer
