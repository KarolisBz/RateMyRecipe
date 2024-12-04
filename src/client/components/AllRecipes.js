// Component Fields
import Recipes from "./Recipes"
import { useEffect, useState } from "react";
import axios from "axios";

// Read content to be imported
const AllRecipes = () => {
    // using states we set movies - 'useState' allows functional components to use states
    // that work like globall vars but with extra computing in between if required
    const [recipes, setRecipes] = useState([]);

    // on reload fetch updated list
    const Reload = () => {
        console.log("Reloading recipes data...");
         // asynchronous, works in the background to "fetch" json data via response
        axios.get('http://localhost:4000/api/recipes')
        .then((response) => {
            console.log(response.data);
            setRecipes(response.data)
        }) // callback function exectured when fullfilled or an error is thrown
        .catch((error) => {
            console.log(error)
        });
    };

    // react hook synchronize with server api (fires on component loading)
    useEffect(() => {
        Reload();
    }, []); // table never changes, so only runs on page load

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {/*Passing recipe data from read to its child movies*/}
                    <Recipes RecipeData={recipes} ReloadData={Reload}/> {/*handelling reload*/}
                </div>
            </div>
        </div>
    );
};

// exporting module to be used in app.js
export default AllRecipes;