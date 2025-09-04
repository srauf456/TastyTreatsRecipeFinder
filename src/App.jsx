
import RecipeCard from './components/RecipeCard';
import './App.css'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './pages/Recipes';
import Search from './pages/Search';
import {  Routes, Route, Link } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';
import About from './pages/About'
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './assets/pattern.svg';
import Navbar from './components/Navbar';
export default function App() {

  
  return ( 
    <div className='min-h-screen w-full'>
      <Navbar/>
      <main className="flex-1">
  <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/recipes" element={<Recipes/>} /> 
         <Route path="/recipes/:id" element={<RecipeDetail/>} /> 
          <Route path="/search" element={<Search/>} /> 
            <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
     
      </Routes>
      </main>
      <Footer/>
      </div>
  );
}
    
  