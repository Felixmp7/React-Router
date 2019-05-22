import express from 'express'
import App from '../dist/ssr/app'
import {StaticRouter} from 'react-router'
import reactDOMServer from 'react-dom/server'

const app = express();


app.get('*', (request,response) => {
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location={request.url} //Ruta dinámica
      >
        <App />
      </StaticRouter>
    )
  console.log(request.url);
  response.write(
    `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Platzi-Video</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
      </head>
      <body>
        <div id="home-container">Hola Mundo${request.url}</div>
        <div id="modal-container"></div>
      <script src="http://localhost:9000/js/app.js"></script>
      </body>
    </html>
    `
  )
  response.end()
})
app.listen(3000)
console.log('El server prendió en el puerto 3000');
