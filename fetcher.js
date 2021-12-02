const request = require('request');
const fs = require('fs');
const array=process.argv.slice(2);
// console.log(array);
const path =array[0];
const fileName =array[1]
request(path,(error ,response, body)=>{
  console.log('error:',error)//Print the error if one occured
  console.log('status code: ', response && response.statusCode)//prints the response code if response was received
  const content =body
  fs.writeFile(fileName,content ,err =>{
    if(err){
      console.log(err);
      return;
    }
  })
})
