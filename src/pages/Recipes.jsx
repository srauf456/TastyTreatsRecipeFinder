
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";
import { getRandomRecipes } from "../api/recipeApi";
import {motion} from "framer-motion"
//should have state as it is managing component
function Recipes(){
    const [recipes, setRecipes] = useState([]); //no recipe fetched initially


     useEffect(() => {
         async function getRecipes() {
             try{
           const result = await getRandomRecipes(5);
           setRecipes(result.recipes);
      //     console.log(result.recipes);
          
             }
            catch(err){
             console.log("Fetch failed");
            }
         }
    

   getRecipes();
  }, []);
 
return (
    <motion.div
    nitial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
        
        {recipes.map(recipe =>(
              
               <RecipeCard  key={recipe.id} id={recipe.id} title={recipe.title} />
               
            
        ))
          
        }
           
    </motion.div>
);

}


export default Recipes;

//onclick cant call fetch call directly