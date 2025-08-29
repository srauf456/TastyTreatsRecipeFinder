import React from 'react';
import { Link } from 'react-router-dom';    
export default function Footer() {
  return (
    <footer className="bg-[#112e2b] text-white py-6 text-center md:flex flex-row items-center">
      <div className='flex-1 pb-6'>
           <p className='text-[#dfb459]'>VISIT US</p>
              <p>Address: 123 Foodie Lane, Flavor Town, FT 12345</p>
                <p>Phone: (123) 456-7890</p>
              
                </div>  
                <div className='flex-1 pb-6'>
                <p className='text-[#dfb459]'>OPENING HOURS</p>
                <p>We are open:</p>
                <p>Mon-Fri: 10:00 AM - 10:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 11:00 PM</p>
                </div>
                <div className='flex-1 pb-6'>
                <p className='text-[#dfb459]'>CONNECT WITH US</p>

                <input type="email" placeholder="Your email address" className="border border-gray-300 rounded-lg p-2" />
      <button className="bg-yellow-500 text-white py-2 m-4 px-4 rounded-lg">Subscribe</button>
      </div>
<div className='flex-2 '>
      <p className='text-[#dfb459]'>© {new Date().getFullYear()} Tasty Treats. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
