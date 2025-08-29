//props: title, image, readyInMinutes, ingredients array, instructions
//structure/; image, title + ready time, ingredients list, button/link / sourceurl

//pass data in comp via props
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
function RecipeCard(props){
return(
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // start hidden and down
      animate={{ opacity: 1, y: 0 }}   // fade in and move up
      transition={{ duration: 0.5 }}   // half-second animation
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
    <Link to={`/recipes/${props.id}`}>
   <img src={props.image} />
<h1 className="recipe-title text-2xl text-amber-300">{props.title}</h1>
<p>{props.serving}</p>
</Link>
    </motion.div>
)
}

export default RecipeCard; 
