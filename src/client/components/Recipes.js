// Component Fields
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
    // Using map function to loop through each movie
    console.log(props)
    return props.RecipeData.map(
        (recipe) => {
            /*Sending each recipe data to recipieData to create a card with a unique KEY */
            return <RecipeItem recipe={recipe} key={recipe._id} Reload={props.ReloadData}/> // passes reloadData function via props for easy data reloading
        }
    )
}

export default Recipes;