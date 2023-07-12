const request = require('request');

request('https://www.npquest', (error, response, body)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(response.statusCode);
    // console.log(body);
})