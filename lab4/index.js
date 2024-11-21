'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions ={
  origin: 'http://127.0.0.1:3001',
  optionsSuccessStatus: 200
}

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1  
    const radius = req.params.r;
    const area = 3.14*radius**2;
    const circumference = 6.28*radius;

    const result = {
        area: area,
        circumference: circumference
    }

    res.json(result);
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => { 
    const width = req.params.width;
    const height = req.params.height;
    const area = width*height;
    const perimeter = 2*width+2*height;

    const result = {
        area: area,
        perimeter: perimeter
    }
    
    res.json(result);
});
//TODO 3
app.get('/math/power/:base/:exponent', (req, res) => {

  const base = req.params.base;
  const exponent = req.params.exponent;
  const power = base**exponent;
  const root = base**(1/2);
  let result;

  if(isNaN(power) || isNaN(root)){
      res.status(400).json({error: 'Invalid input'})
      return;
  }

  result = (req.query.root === 'true') ? {
      result: power,
      root: root
  } :
  {
      result: power
  };

  res.json(result);
});
//TODO4
let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
    {'joke': 'Dlaczego komputer poszedł do lekarza?', 'response': 'Bo złapał wirusa!'},
    {'joke': 'Dlaczego komputer nie może być głodny?', 'response': 'Bo ma pełen dysk!'},
    {'joke': 'Co mówi jeden bit do drugiego?', 'response': 'Trzymaj się, zaraz się przestawiamy!'}
];
let lameJoke = [
    {'joke': 'Dlaczego programiści preferują noc?', 'response': 'Bo w nocy jest mniej bugów!'},
    {'joke': 'Jak nazywa się bardzo szybki programista?', 'response': 'Błyskawiczny kompilator!'}
];
//TODO5
app.get('/jokebook/categories', (req, res) => {
    res.json(categories);
});

app.get('/jokebook/joke/:category', cors(corsOptions), (req, res, next) => {
    let joke;
  if(req.params.category === "funnyJoke"){
    joke = funnyJoke[Math.floor(Math.random() * funnyJoke.length)]
  }
  else if(req.params.category === "lameJoke"){
    joke = lameJoke[Math.floor(Math.random() * lameJoke.length)]
  }
  else{
    res.json({'error': `nie ma kategorii: ${req.params.category}`})
    return;
  }
  res.json(joke);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});