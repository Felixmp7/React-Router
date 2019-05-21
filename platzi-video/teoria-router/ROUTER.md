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

## Link y NavLink

BrowserRouter no hará mucho si no esta acompañado de enlaces y rutas, empecemos hablando de los enlaces que se llaman Link y NavLink. Estos funcionan de manera similar a las anclas de HTML.

**Link cuenta con las siguientes propiedades:**

- to: similar al href de , puede recibir un string indicando la ruta a donde va a mandar o bien recibir un objeto con: pathname, un string que representa la ruta a donde se dirige; search, un string que representa el query de una url; hash, un hash para poner en la url; y por último state, un objeto que representa un estado en la navegación.
- replace: similar a to, pero en lugar de añadir una nueva ruta al stack del historial de navegación, reemplaza la ultima ruta por la nueva ruta.
- innerRef: es una forma de obtener el elemento HTML del componente, funciona igual que el ref de React.

**NavLink** es una versión especial de Link, cuenta con varias características más poderosas como, por ejemplo:

- activeClassName: cuando se navegue a la ruta que dirija el NavLink, esta propiedad añadirá al className del componente el string que le pasemos.
- activeStyle: similar a activeClassName, pero con estilos en línea.
- isActive: es una función que se mandara cuando naveguemos a la ruta del NavLink.
- exact: recibe un booleano, sirve para marcar si dirige a una ruta exacta. Se vera a mayor profundidad cuando manejemos rutas.
- strict: recibe un booleano, sirve para marcar si dirige a una ruta estricta. Se vera a mayor profundidad cuando manejemos rutas.
- location: sirve para poder hacer la comparación de isActive con alguna otra ruta.

## Route

Aun no estas cambiando nada dentro de la interfaz, solamente se esta cambiando la url. Para poder cambiar la interfaz acorde a la url usaremos Route, algunas propiedades son:

- component: que componente quieres renderizar.
- path: indica la ruta en la cual va a renderizar el componente que le pases.
- render: es una alternativa a componente, puedes hacer un renderizado en forma de función como en los componentes de React.
- children: son los hijos o componentes que tenga anidado.
- exact: recibe un booleano, si le indicas que es verdadero solo hará match si la ruta coincide exactamente con la ubicación, no hará caso a ninguna sub-ruta.
- strict: recibe un booleano, si le indicas que es verdadero solo hará match si la ruta a la que te diriges es idéntica a la ruta del Route.
- sensitive: recibe un booleano, si le indicas que es verdadero activara el case sensitive para la ruta.

## Parámetros de navegación

En esta clase vamos a aprender a personalizar un poco más nuestra url y pasar parámetros a través de esta. Haremos uso del componente Link y su propiedad to dentro de cada componente Media de nuestro proyecto.
