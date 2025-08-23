
// Home fetches a list of random recipes (like 5) when the page loads

// Uses getRandomRecipe() (or a getMultipleRandomRecipes(count) if you make one)

// Stores the recipes in a useState

// Uses .map() to render a list of <RecipeCard /> components
import { getRandomRecipes } from "../api/recipeApi";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";
import {Link} from "react-router-dom";

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
        <div className="min-h-screen bg-[#183d38]  flex flex-col items-center">
            <h2 className="text-5xl font-bold dancing-script-font text-[#dfb459] p-4">Today's Featured Recipe</h2>
            <Link to="/recipes"><h3 className="text-2xl pb-6  text-[#dfb459]">GET MORE RECIPES</h3></Link> 

  <RecipeCard id={recipe.id} title={recipe.title} image={recipe.image}/>

            
        </div>
    )
}


export default Home;