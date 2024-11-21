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


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});