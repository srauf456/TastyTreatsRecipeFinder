//central JS used for all API calls
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";




export async function getRandomRecipes(count) {
  const res = await fetch(`${BASE_URL}/random?number=${count}&apiKey=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}

export async function getRecipeById(id) {
 //   console.log(API_KEY);
const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`); 
if(!res.ok)  throw new Error("Fetch call failed");
  
return res.json();
}

export async function searchRecipes(query) {
  const res = await fetch(`${BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`);

  if (!res.ok) throw new Error("Failed to fetch recipes");
  return res.json();
}