# BrowserRouter
Recibe las siguientes propiedades:

- basename. El path inicial.
- getUserConfirmation. Permite validar si de verdad alguien quiere dejar la página.
- forceRefresh. True or False, define si la página se deba recargar o no.
- keyLength. Son un id que se recibe con cada navegación. Por defecto es un código de 6 caracteres.
- children. Es el componente que está dentro del BrowserRouter.

Para mas información -> visita https://reacttraining.com/react-router/web/api/BrowserRouter

## Tipos de enrutadores.

React Router es una librería más que añadimos a nuestro stack, lo más básico que debemos aprender de React Router son sus distintos enrutadores:

- BrowserRouter: Es el enrutador que quizá más tiempo utilices como frontend, usa el HTML5 history API lo que quiere decir que es el enrutador que nos da la posibilidad de cambiar las rutas en el navegador.
- HashRouter: Funciona similar al BrowserRouter, pero usa un hash (#) al inicio de cada url.
- MemoryRouter: Mantiene el historial de búsqueda en memoria y te sirve para realizar pruebas sin navegador. En este curso no haremos pruebas unitarias por lo tanto no veremos este enrutador.
- StaticRouter: Nunca cambia de dirección, es perfecto para realizar Server Side Render.
- NativeRouter: Es el router que nos servirá si queremos usar React Native, NO lo veremos en este curso. Es recomendable usar en su lugar React Navigation.
