import { NavLink} from "react-router-dom";
import Logo from '../assets/pexels-maksgelatin-5550323-edit.png';

export default function Navbar() {
  return (
    <nav className='w-full bg-[#183d38] border border-[#183d38] shadow-md'> 
      <div className='flex  justify-between  items-center p-2 bg-[#112e2b] pb-6 mx-w-7xl'>
        <div className="flex flex-col">
          <div className="flex flex-row md:flex-row gap-4 items-center">
        <p className="text-[#dfb459] open-sans text-md">VISIT US</p>
      <p className="text-[#dfb459] open-sans text-md">WE ARE OPEN</p></div>
      <img src={Logo} alt="Logo" className="p-2 w-22 h-22 object-cover" />
        
      <p className="text-[#dfb459] dancing-script-font text-xl">Find your next favorite recipe</p>
      
      </div>
        <div className="hidden md:flex gap-10 p-3 text-lg text-white  ">
       
      <NavLink to="/" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        HOME
      </NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        ABOUT
      </NavLink>
      <NavLink to="/menu" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        MENU
      </NavLink>

      <NavLink to="/contact" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        CONTACT
      </NavLink>
      <NavLink to="/recipes" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        RECIPES
      </NavLink>
      <NavLink to="/search" className={({isActive}) => isActive ? "text-[#dfb459] shadow-md" : ""}>
        SEARCH
      </NavLink>
{/* <p className="hero-subtitle">Find your next favorite recipe</p>  */}

   </div>
    </div>
    </nav>
  );
}