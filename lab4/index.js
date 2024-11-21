'use strict';

const express = require('express');
const app = express();

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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});