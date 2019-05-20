## Nuevas herramientas de la Actualización del Curso de React 2019

1. Para eliminar divs innecesarios, mejor utilizar <React.Fragment> </React.Fragment>

## Ciclo de Vida en React

  Montaje:
  
      -Representa el momento donde se inserta el codigo del componente en el DOM.
      
      -Se llaman 3 métodos:
      
        * constructor -> Perfecto para inicializar estados.
        
        * render -> Renderiza el componente.
        
        * componentDidMount -> Se llama inmediatamente luego del render y hace referencia a cuando
                                 nuestro componente acaba de ser montado.
  
  
  Actualización:
  
      -Ocurre cuando los props o el estado del componente cambia.
      
      -Se llaman 2 métodos:
      
        * render -> Re-renderiza el componente si ocurrió algún cambio en su estructura (Esto afecta
                    a sus hijos tambien).
                    
        * componentDidUpdate -> Recibe 2 argumentos (props antiguos y estado antiguo).
        
   Desmontaje:
   
    -Nos da la oportunidad de jacer limpieza de nuestro componente
    -Se llama un solo método
      * componentWillUnmount -> Lugar perfecto para limpiar memoria (Timers, intervals)
