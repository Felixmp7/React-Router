const express = require('express');
const app = express();

app.get('*', (request,response) => {
  console.log(request.url);
  response.write('Hola Mundo' , request.url)
  response.end()
})

app.listen(3000)
