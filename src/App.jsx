
import RecipeCard from '../components/RecipeCard';
import './App.css'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './pages/Recipes';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import './assets/pattern.svg';
function App() {

  
  return (
    <div className='w-full min-h-screen border-gray-300'>
      <BrowserRouter>
        <header className='w-full shadow-md bg-[#112e2b] pb-6 '>

          <div className='flex justify-between  items-center p-2 bg-[#183d38]  '>

    <img src="./src/assets/pexels-maksgelatin-5550323-edit.png" alt="Logo" className="p-2 w-22 h-22" />
    {/* <p className="hero-subtitle">Find your next favorite recipe</p> */}
        
      <nav className='flex font-sans gap-4 text-md text-[#dfb459]'>
        
    <Link to="/">HOME</Link> | <Link to="/about">ABOUT</Link> | <Link to="/about">MENU</Link> | <Link to="/about">CONTACT</Link> | <Link to="/search">SEARCH</Link>
    
     </nav>
     
    </div>  
   

   <div className='flex flex-row mt-4 p-8'> 
  <img src="./src/assets/pexels-maksgelatin-5550323-edit.png" alt="Logo" className="p-4 ml-6 w-52 h-52 " />
 
<h1 className='dancing-script-font text-7xl text-[#dfb459] p-6'>Delightful Experience</h1>


    <img src="./src/assets/pexels-nicole-michalou-5779178.jpg" alt="food" className=' w-200 h-160 opacity-100' />
</div>

</header>
<h3 className='dancing-script-font text-5xl  text-[#dfb459] p-6 '>fine dining with a twist of flavor</h3>

<section className="relative w-screen bg-[#183d38] py-12 ">
      {/* Background strip */}
      <div className="absolute inset-0 bg-[#183d38]"></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="dancing-script-font text-4xl font-bold text-center p-2 mb-8 text-[#dfb459]">
          OUR SPECIALS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-[#dfb459] border-3">
            <img 
              src="https://images.pexels.com/photos/29143166/pexels-photo-29143166.jpeg" 
              alt="Special Dish 1"
              className="mx-auto rounded-lg mb-4 shadow-2xl "
            />
            <h3 className="text-xl font-semibold mb-2">Grilled Salmon</h3>
            <p className="text-gray-600">
              Freshly caught salmon grilled to perfection with herbs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-[#dfb459] border-3">
            <img 
              src="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg" 
              alt="Special Dish 2"
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pasta Primavera</h3>
            <p className="text-gray-600">
              Classic Italian pasta with fresh seasonal vegetables.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center border-[#dfb459] border-3">
            <img 
              src="https://images.pexels.com/photos/18580160/pexels-photo-18580160.jpeg" 
              alt="Special Dish 3"
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Chocolate Lava Cake</h3>
            <p className="text-gray-600">
              Rich chocolate cake with a molten center served warm.
            </p>
          </div>

        </div>
      </div>
    </section>
     <section className="w-screen bg-[#112e2b] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        {/* Left: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6">Book a Table</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="20"
                placeholder="2"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 border-[#dfb459] text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Reserve Now
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
    <section className="w-screen">
<img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg" alt="Restaurant Interior" className="w-full object-cover mb-8" />
     </section>
     <AnimatePresence>
        <Routes>
        <Route path="/" element={<Home/>} />
       
         <Route path="/recipes" element={<Recipes/>} /> 
         <Route path="/recipes/:id" element={<RecipeDetail/>} /> 
          <Route path="/search" element={<Search/>} /> 
      </Routes>
      <Footer />
   </AnimatePresence>
    </BrowserRouter>
    
    </div>
  )
}

export default App
