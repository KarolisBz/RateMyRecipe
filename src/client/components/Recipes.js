// Component Fields
import RecipeItemMapping from "./RecipeItemMapping"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Search } from "react-bootstrap-icons";

// Read content to be imported
const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const category = useParams()['category']; // fetch the recipeType from path

    // on reload fetch updated list
    const Reload = () => {
        console.log("Reloading recipes data...");
        // asynchronous, works in the background to "fetch" json data via response
        axios.get('http://localhost:4000/api/recipes/' + category)
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
    }, [category]);

    // search bar functionality
    // filtering recipe array based on search result
    const filteredArray = recipes
    .filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    })

    const searchRecipes = (event) => {
        event.preventDefault(); // stop page refresh
        // only re-renders page with new content
    }

    const searchInputChanged = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    return (
        <div>
            <div style={{ height: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem'}}>
                <Form onSubmit={searchRecipes}>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                onChange={searchInputChanged}
                                style={{ width: '25vw', marginRight: '-1vw' }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">
                                <Search/>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            <div className="container mt-4" id="recipeContainer">
                <div className="row">
                    {/*Passing recipe data from read to its child movies*/}
                    <RecipeItemMapping RecipeData={filteredArray} ReloadData={Reload} /> {/*handelling reload*/}
                </div>
            </div>
        </div>
    );
};
// exporting module to be used in app.js
export default AllRecipes;