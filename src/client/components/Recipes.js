// Component Fields
import RecipeItem from "./RecipeItem";

// Movies content to be imported
// movie gets "props" data which contains myMovies data 
// from parent Read
const Recipes = (props) => {
    // Using map function to loop through each movie
    return props.RecipeData.map(
        (recipe) => {
            /*Sending each movie data to MovieItem to create a card with a unique KEY */
            return <RecipeItem recipe={recipe} key={recipe._id} Reload={props.ReloadData}/> // passes reloadData function via props for easy data reloading
        }
    )
}

// exporting module to be used in app.js
export default Recipes;