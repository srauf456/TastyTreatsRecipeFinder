
// Home fetches a list of random recipes (like 5) when the page loads

// Uses getRandomRecipe() (or a getMultipleRandomRecipes(count) if you make one)

// Stores the recipes in a useState

// Uses .map() to render a list of <RecipeCard /> components
import { getRandomRecipes } from "../api/recipeApi";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import logoImg from '../assets/pexels-maksgelatin-5550323-edit.png';
import foodImg from '../assets/pexels-nicole-michalou-5779178.jpg';


function Home(){
     const [recipe, setRecipe] = useState(null);
     
useEffect(()=>{
    async function getRecipe() {
        const result = await getRandomRecipes(1);
       // console.log(result);
        setRecipe(result.recipes[0]);  
          
    } 
    getRecipe();
},[]);


if (!recipe) return <p>Loading...</p>;
    
    return (
        <div>

    <header className='relative p-10 border border-[#183d38]    bg-[#112e2b]'>
   <div className="flex flex-col items-center md:flex-row p-10">
   <img src={logoImg} alt="Logo" className="p-4 ml-6 w-62 h-62 " />

 <h1 className='playfair-display-font text-8xl text-white'>Dive into a <span className='text-[#dfb459] dancing-script-font text-6xl'>Delightful Experience</span></h1>


    <img src={foodImg} alt="food" className='rounded-4xl w-200 h-150 opacity-100' />

    </div>
<div className="flex justify-end ">
        <button type="button" className="w-24 h-24 border-2 border-[#dfb459] p-2 playfair-display-font text-md text-white animate-pulse rounded-full color-[#dfb459]" disabled>

  BOOK A TABLE
</button>
</div>
 </header>

 <section className="relative shadow-[#183d38] bg-[#112e2b] py-12 ">
       {/* /* Background strip */ }
      <div className="absolute inset-0 "></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="dancing-script-font text-4xl font-bold text-center p-4 mb-8 text-[#dfb459]">
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
            <h3 className="text-3xl font-semibold mb-2 dancing-script-font">Grilled Salmon</h3>
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
            <h3 className="text-3xl font-semibold mb-2 dancing-script-font">Pasta Primavera</h3>
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
            <h3 className="text-3xl font-semibold mb-2 dancing-script-font">Chocolate Lava Cake</h3>
            <p className="text-gray-600">
              Rich chocolate cake with a molten center served warm.
            </p>
          </div>

        </div>
      </div>
    </section> 

     <section className="bg-[#112e2b] py-12">
     <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
         {/* Left: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
         <h2 className="text-5xl font-bold mb-6 dancing-script-font p-2">Book a Table</h2>
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
            className="w-full object-cover h-full"
          />
         
        </div>

</div>
      
          </section>  
  
        <div className=" bg-[#183d38]  flex flex-col items-center pb-12">
            <h2 className="text-5xl font-bold dancing-script-font text-white p-4">Today's Featured Recipe</h2>
            <Link to="/recipes"><h3 className="text-2xl pb-6 playfair-display-font text-white">GET MORE RECIPES</h3></Link>

  <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image}/>

            </div>
 <section>
<img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg" alt="Restaurant Interior" className="w-full object-cover" />
     </section>

        </div>
    )
}


export default Home;