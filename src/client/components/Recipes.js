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
    const [filter, setFilter] = useState("Alpha");
    const category = useParams()['category']; // fetch the recipeType from path
    const sortDictionary = [
        {
            Alpha: (a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            },
            CalUp: (a, b) => {
                if (a.calories < b.calories) return -1;
                if (a.calories > b.calories) return 1;
                return 0;
            },
            CalDown: (a, b) => {
                if (a.calories > b.calories) return -1;
                if (a.calories < b.calories) return 1;
                return 0;
            },
            FatUp: (a, b) => {
                if (a.fat < b.fat) return -1;
                if (a.fat > b.fat) return 1;
                return 0;
            },
            FatDown: (a, b) => {
                if (a.fat > b.fat) return -1;
                if (a.fat < b.fat) return 1;
                return 0;
            },
            ProUp: (a, b) => {
                if (a.protein < b.protein) return -1;
                if (a.protein > b.protein) return 1;
                return 0;
            },
            ProDown: (a, b) => {
                if (a.protein > b.protein) return -1;
                if (a.protein < b.protein) return 1;
                return 0;
            },
            SaltUp: (a, b) => {
                if (a.salt < b.salt) return -1;
                if (a.salt > b.salt) return 1;
                return 0;
            },
            SaltDown: (a, b) => {
                if (a.salt > b.salt) return -1;
                if (a.salt < b.salt) return 1;
                return 0;
            }
        }
    ]

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
        .sort(sortDictionary[0][filter])

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
            <div style={{ height: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem' }}>
                <Form onSubmit={searchRecipes}>
                    <Row>
                        <Col xs="auto">
                            <Form.Select aria-label="Default select example" value={filter} onChange={(e) => setFilter(e.target.value)}>
                                <option value="Alpha">Alphabetical</option>
                                <option value="CalUp">Calories ⬆️</option>
                                <option value="CalDown">Calories ⬇️</option>
                                <option value="FatUp">Fat ⬆️</option>
                                <option value="FatDown">Fat ⬇️</option>
                                <option value="ProUp">Protein ⬆️</option>
                                <option value="ProDown">Protein ⬇️</option>
                                <option value="SaltUp">Salt ⬆️</option>
                                <option value="SaltDown">Salt ⬇️</option>
                            </Form.Select>
                        </Col>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                onChange={searchInputChanged}
                                style={{ width: '20vw', marginRight: '-0.5vw', marginLeft: '-0.5vw' }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">
                                <Search />
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