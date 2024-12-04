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
        "post-Date": "2018",
        "thumnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "post-Date": "2018",
        "thumnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "title": "Scrambled Eggs",
        "description": "Blank",
        "post-Date": "2018",
        "thumnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    }
]

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/api/recipes', async(req, res) => {
    // all the movie data fetched async
    //const movies = await Movie.find({}); // empty object {} means it fetches all objects in the database

    // give back respone in json format with status 200 'okay'
    res.status(200).json(testData)
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});