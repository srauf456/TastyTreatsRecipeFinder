import React from 'react';
import { Link } from 'react-router-dom';    
import foodImg from '../assets/pexels-nicole-michalou-5779178.jpg';
import instaLogo from '../assets/instagram-svgrepo-com.svg';
import fbLogo from '../assets/facebook-176-svgrepo-com.svg';
import googleLogo from '../assets/google-178-svgrepo-com.svg';
export default function Footer() {
  return (
    <footer className="bg-[#112e2b] text-white py-6 text-center md:flex-row flex flex-col items-center justify-between">
      <div className='p-4 md:flex-row flex flex-col items-center justify-between max-w-7xl mx-auto md:w-full wd-52 gap-18'>
        <div className='relative transform rotate-45 md:w-62 md:h-62 w-32 h-32 overflow-hidden'>
  <div className='transform rotate-45 scale-140'>
         <img src={foodImg} alt="food" className='md:w-62 md:h-62 w-32 h-32 opacity-100 object-cover shadow-lg max-w-lg' />
        </div>
        </div>
        <div>
           <p className='text-[#dfb459]'>VISIT US</p>
              <p>Address: 123 Foodie Lane, Flavor Town, FT 12345</p>
                <p className='pb-2'>Phone: (123) 456-7890</p>
              <p className='text-[#dfb459]'>OPENING HOURS</p>
                <p className='pb-2'>Daily: 10:00 AM - 10:00 PM</p>
                 <p className='text-[#dfb459] pb-2'>CONNECT WITH US</p>
                 <div className='flex-row flex items-center justify-center gap-4 pb-2'>
                 <p><img src={instaLogo} alt="Instagram" className='w-6 h-6'/></p>
                 <p><img src={fbLogo} alt="Facebook" className='w-6 h-6'/></p>
                 <p><img src={googleLogo} alt="Google" className='w-6 h-6'/></p>
                 </div>
<p className='text-[#dfb459] pt-2'>OUR NEWSLETTER</p>
                <input type="email" placeholder="Your email address" className="border border-gray-300 rounded-lg p-2" />
      <button className="bg-[#dfb459] text-white py-2 m-4 px-4 rounded-lg">Subscribe</button>
      <p className='text-[#dfb459] pt-2'>© {new Date().getFullYear()} Tasty Kitchen. All Rights Reserved.</p>
</div>
<div className='relative transform rotate-45 md:w-62 md:h-62 w-32 h-32 overflow-hidden'>
  <div className='transform rotate-45 scale-140'>
      <img src={foodImg} alt="food" className='md:w-62 md:h-62 w-32 h-32 opacity-100 object-cover shadow-lg max-w-lg' />
      </div> 
      </div>
      </div>  

    </footer>
  );
}
