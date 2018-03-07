#!/usr/bin/env node 

const fs = require('fs');

let [,,input] = process.argv;


const print =()=>{

    fs.readFile(input, function (err, data) {
        if (err) {
            return console.error(err);
        } else{
            console.log(data.toString());
        };
    });
};
  
print(input);


