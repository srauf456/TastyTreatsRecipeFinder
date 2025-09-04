import { NavLink} from "react-router-dom";
import Logo from '../assets/pexels-maksgelatin-5550323-edit.png';
  import { useState } from "react";
  import {Menu, X} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full bg-[#183d38] border border-[#183d38] shadow-md'> 
      
        <div className="flex justify-between items-center gap-8 bg-[#112e2b] text-[#dfb459] text-sm p-4">
          
        <p className="text-[#dfb459] open-sans text-md">VISIT US</p>
      <p className="text-[#dfb459] open-sans text-md">WE ARE OPEN</p>
     </div>
     <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
      <img src={Logo} alt="Logo" className="p-2 w-18 h-18 object-cover rounded-full border-2 border-[#dfb459]" />
      <div className="flex flex-col">
      
    <p className="text-[#dfb459] dancing-script-font text-4xl">Tasty Kitchen</p>
    <p className="text-[#dfb459] dancing-script-font text-lg">♦♦ Restaurant ♦♦</p>
    </div>
      </div>

       <div className="hidden md:flex gap-10 p-3 text-lg text-white">

        {["HOME", "ABOUT", "MENU", "CONTACT", "RECIPES", "SEARCH"].map((item) => (
         <NavLink
           key={item}
           to={`/${item.toLowerCase()}`}
           className={({ isActive }) => (isActive ? "text-[#dfb459] shadow-md" : "")}
         >
           {item}
         </NavLink>
       ))}
         
        


      </div>
      <div className="lg:hidden">
        <button
          className="md:hidden text-white "
          onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
   >
          {isOpen ? <X size={28} /> : <Menu className="bg-[#183d38]" size={28} />}
        </button>
      </div> 
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-3 text-lg bg-[#112e2b] text-white  ">
       {["HOME", "ABOUT", "MENU", "CONTACT", "RECIPES", "SEARCH"].map((item) => (
         <NavLink
           key={item}
           onClick={() => setIsOpen(false)}
           to={`/${item.toLowerCase()}`}
           className={({ isActive }) => (isActive ? "text-[#dfb459] shadow-md" : "")}
         >
           {item}
         </NavLink>
       ))}
</div>
      )}
    
      

  
    
    </nav>
  );
}