import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect} from "react";
import { getRecipeById } from "../api/recipeApi";

function RecipeDetail(){
    const {id} = useParams();
    const navigate = useNavigate();
    //console.log(id);
    const [recipeDetail, setRecipeDetail] = useState(null);
      useEffect(() => {
    async function fetchRecipe() {
        try{
      const result = await getRecipeById(id); // you’ll need this function
      setRecipeDetail(result);
   //   console.log(result);
    } catch(err){
        console.log("Error thrown");
    }
    }

    fetchRecipe();
  }, [id]);

  if (!recipeDetail) return <p>Loading recipe details...</p>;
    return(
        <div>
            <h1>{recipeDetail.title}</h1>
            <img src={recipeDetail.image} alt={recipeDetail.title} />
      <p>Servings: {recipeDetail.servings}</p>
      <p>Ready in: {recipeDetail.readyInMinutes} minutes</p>
      <button onClick={() => navigate(-1)}>Go Back to Recipes</button>
        </div>
    )
}

export default RecipeDetail;