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

let testData = [
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "type": "mainDish",
        "calories": "1300",
        "fat": "16.6",
        "protein": "13.8",
        "Salt": "1.92",
        "reviews": [
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment 2" }
        ],
        "_id": "123123123",
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "calories": "1300",
        "reviews": [
            { "rating": 1, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment 2" }
        ],
        "_id": "1",
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "calories": "1300",
        "reviews": [
            { "rating": 2, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment 2" }
        ],
        "_id": "2",
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "calories": "1300",
        "reviews": [
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 4, "comment": "hello this is a comment 2" }
        ],
        "_id": "3",
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "calories": "1300",
        "reviews": [
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment" },
            { "rating": 1, "comment": "hello this is a comment" },
            { "rating": 2, "comment": "hello this is a comment" },
            { "rating": 4, "comment": "hello this is a comment" },
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment 2" }
        ],
        "_id": "4",
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "postDate": "2018",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "calories": "1300",
        "reviews": [
            { "rating": 3, "comment": "hello this is a comment" },
            { "rating": 5, "comment": "hello this is a comment 2" }
        ],
        "_id": "5",
    },
]

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
    recipeType: String,
    thumbnail: String,
    calories: Number,
    reviews: [reviewSchema],
  });

// added data model which is a blueprint for defining the structure of data within a MongoDB collection
const recipe = mongoose.model('recipes', recipeSchema);


// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/api/recipes/:recipeType', async(req, res) => {
    // fetch recipe based on type
    const recipes = await recipe.find({recipeType: req.params.recipeType}); // fetching based on type
    console.log(recipes)

    // give back respone in json format with status 200 'okay'
    res.status(200).json(testData)
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});