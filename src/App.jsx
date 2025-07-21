
import RecipeCard from '../components/RecipeCard';
import './App.css'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './pages/Recipes';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import pattern from "../src/assets/pattern.svg"
function App() {

  
  return (
    <div>

    
      
   <BrowserRouter> 
    
     
      <header className='app-header'>
        <div className='hero-banner'>
             <h1 className="hero-title dancing-script-font">Tasty Treats</h1>
    <p className="hero-subtitle">Find your next favorite recipe</p>
        
      <nav className="main-nav">
          
      
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/search">Search</Link>
    
     </nav> </div>
     </header>
     
     <AnimatePresence>
        <Routes>
        <Route path="/" element={<Home/>} />
       
         <Route path="/recipes" element={<Recipes/>} /> 
         <Route path="/recipes/:id" element={<RecipeDetail/>} /> 
          <Route path="/search" element={<Search/>} /> 
      </Routes>
   </AnimatePresence>
    </BrowserRouter>
   </div>  
  )
}

export default App
