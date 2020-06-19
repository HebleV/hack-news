const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const requestHttp = require('request-promise-native');

const PORT = 8080;
const app = express();


const baseUrl = 'http://hn.algolia.com/api/v1/';
 const newStoryUrl = `${baseUrl}newest`;
 const storyUrl = `${baseUrl}items/15`;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/items/:id', async (req,res) => {
    console.log('inside get 2, ', req);
  try {
    const response = await requestHttp(`http://hn.algolia.com/api/v1/items/${req.params.id}`);
    console.log('response:::: ', response);
  } catch (error) {
    console.log(error);
  }
    res.send({});
});

app.get('*', (req,res) => {
    console.log('inside get');
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function() {
    console.log('server listening on port ' + PORT);
});