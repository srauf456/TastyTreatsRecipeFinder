import { useState, useEffect } from "react";
import { searchRecipes } from "../api/recipeApi";
import RecipeCard from "../components/RecipeCard";
function Search(){
    const [query, setQuery] = useState("");
         const [searchResults, setSearchResults] = useState([]);
         const [loading, setLoading] = useState(false);
         const [error, setError] = useState(null);
         function handleChange(e){
    
    setQuery(e.target.value);
}
function handleSubmit(){
 async function fetchSearch() {
    setLoading(true);
    setError(null);
 try{
 const result = await searchRecipes(query);
 setSearchResults(result.results);
 setLoading(false);
} catch(err){
    setError("fetch failed");

} finally {
    setLoading(false);
}
 //console.log(result.results); 
 } 
 fetchSearch();
 }
    return (
        <div>
            {loading && <p>Loading recipes...</p>}
            {error && <p style={{color: "red"}}>{error}</p> }
              <input className="search-input" placeholder="Search recipes..." onChange={handleChange} value={query} type="text"/>
              <button type="submit" onClick={handleSubmit} className="text-[#dfb459]">SEARCH</button>
              <div className="search-results">
                {searchResults.map(searchitem =>
                     <RecipeCard key={searchitem.id} id={searchitem.id} title={searchitem.title} image={searchitem.image}/>
                )}
              </div>
        </div>
    )
}


export default Search;