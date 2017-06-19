const express = require('express');
const app = express();



var loremIpsum = require('lorem-ipsum');
var output = loremIpsum({
  units:'paragraphs',
  count: 1,
  suffix: "\n",
  sentenceLowerBound: 8,
  paragraphLowerBound: 5,
  format: 'html'
});

app.get('/', function(req, res){

  res.send(output);
});

app.get('/:numOfParagraphs', function(req, res){
  let num = parseInt(req.params.numOfParagraphs);
  output = loremIpsum({
    units: 'paragraphs',
    count: num,
    suffix: "\n",
    sentenceLowerBound: 8,
    paragraphLowerBound: 5,
    format: 'html'
  });
  res.send(output);
});

app.listen(3000, function(){
  console.log("You have been successful in connecting.");
});
