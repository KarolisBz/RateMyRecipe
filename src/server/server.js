// class fields
const express = require('express');
const app = express();
const port = 4000;

// body-parser middleware to parse through content
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cross-Origin Resource Sharing
// when browser connects to server, it's okay to accept requests outside domain
const cors = require('cors');
const { type } = require('@testing-library/user-event/dist/type');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// connecting to mongoose database rateMyRecipe
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.ropg5.mongodb.net/rateMyRecipe');

// embedded review object
const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
})

// creating a recipe schema
const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    postDate: Date,
    category: String,
    thumbnail: String,
    calories: Number,
    reviews: [reviewSchema],
  });

// added data model which is a blueprint for defining the structure of data within a MongoDB collection
const recipeModel = mongoose.model('recipes', recipeSchema);


// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/api/recipes/:category', async(req, res) => {
    // getting recipe return type
    let query = {category: req.params.category}
    if (req.params.category == "All") {
        query = {}
    }
    
    // fetch recipe based on type
    const recipes = await recipeModel.find(query); // fetching based on type
    console.log(recipes)

    // give back respone in json format with status 200 'okay'
    res.status(200).json(recipes)
});

// route fetches a specific recipe by its ID
app.get('/api/recipe/:id', async (req, res) => {
    const recipe = await recipeModel.findById({ _id: req.params.id });
    res.status(200).json(recipe)
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});