// initial jokes provided by the client
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require ('path');
var port = (process.env.port||3000);
var urlEncodedParser= bodyParser.urlencoded({extended:false});
app.use(express.static('public'));

app.listen(port, function(){
  console.log ('I am listening');
});//app.listen

app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile('public/index.html');
});//app.get
