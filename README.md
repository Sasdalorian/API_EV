# EARTH VOLUNTEERS

> Proyectos Relacionados

* https://github.com/Sasdalorian/Proyecto-Individual.git

* https://github.com/Sasdalorian/API_EV

### Para instalar Dependencias usar ```npm i```

> Dependencias, aclarar que con ejecutar una vez npm i ya instalara todas las dependencias que necesitara el proyecto para funcionar.

``` 
    bcrypt
    body-parser
    dotenv
    express
    jsonwebtoken
    nodemon
    passport
    passport-jwt
    pg
    sequelize
```

> Para la Base de datos se hace uso de ```PostgreSQL``` y para interactuar con la DataBase se hace uso de ```Sequelize```.

> Crear archivo .env para configurar conexion a la DB y para la encriptacion de token, en la API existe archivo .env.example.

``` 
    USER_DB= "poner usuario"
    PASS_DB= "poner contraseña"
    HOST_DB= "poner host"
    PORT_DB=5432
    DATABASE_NAME="nombre database"

    JWT_SECRETO="CarlWheezer-GlimpseOfUs(Croussant Remix)"
```

> Ejecutar ```node pruebas.js``` para creacion de tablas predeterminadas

> Después de ejecutar node pruebas.js se ingresaran tres usuarios predeterminados con los siguientes datos.
``` 
    Email: admin@gmail.com - Pass: 1234       -> Muestra la vista de admin y los accesos del mismo.
    Email: voluntario@gmail.com - Pass: 1234  -> Muestra la vista de voluntario y su respectiva tabla para unirse.
    Email: anfitrion@gmail.com - Pass: 1234   -> Muestra la vista de anfitrion y su respectiva tabla para crear voluntariados.
```

## Rúbrica
* Consulta a la Base de Datos
```
1. Selecciona las columnas requeridas para presentar la información solicitada.
    - API_EV/utils/funciones.js
    - API_EV/utils/estadisticas.js

2. Utiliza JOIN para relacionar la información de distintas tablas.
    - API_EV/utils/funciones.js // Linea 10 - Linea 27 - Linea 46

3. Utiliza WHERE para filtrar la información requerida.
    - API_EV/utils/estadisticas.js // Linea 97 - Linea 112 - Linea 127
    - API_EV/utils/delete.js
    - API_EV/utils/perfil.js // Linea 17

4. Utiliza cláusulas de ordenamiento para presentar la información.
    - API_EV/utils/gets.js (topAreasDesc, topAreasAsc) // Linea 72 y Linea 101

5. Utiliza cláusulas de agrupación de información para obtener datos agregados
    - API_EV/utils/estadisticas.js // Linea 25 - Linea 51 - Linea 80
```
* Algoritmo de cálculo y manipulación de archivos de texto
```
6. Utilización general del lenguaje, sintaxis, selección de tipos de datos, sentencias lógicas, expresiones, operaciones, comparaciones.
    - API_EV/utils/delete.js        -Proyecto-Individual/utils/gets.js
    - API_EV/utils/funciones.js     -Proyecto-Individual/utils/post.js
    - API_EV/utils/perfil.js          -Proyecto-Individual/public/js/donacion.js

7. Utilización de sentencias repetitivas.
    - Proyecto-Individual/public/js/voluntariado.js // Linea 7
    - Proyecto-Individual/views/adminTvoluntariados.hbs // Linea 29
    
8. Convenciones y estilos de programación.
    - API_EV & Proyecto-Individual, en ambos se utiliza.

9. Utilización correcta de estructuras de datos
    - API_EV/config/database.js // Conexion DataBase
    - API_EV/utils // CRUD

10. Manipulación de archivos.
    - Proyecto-Individual/utils/post.js // Linea 141

```
* Página web y html
```
11. Utilización de tags html, estilos y responsividad.
    - Proyecto-Individual/views
    - Proyecto-Individual/public/css

12. Utilización de Bootstrap.
    - Proyecto-Individual/views/partials/header.hbs
    - Proyecto-Individual/views/index.hbs
```
* Lenguaje Node
```
13. Inclusión de paquetes y librerías de usuario.
    - API_EV & Proyecto-Individual /package.json

14. Agrupación del código y separación por funcionalidad.
    - API_EV & Proyecto-Individual, en ambos

15. Utilización de funciones asíncronas.
    - API_EV/utils
    - API_EV/app
    - Proyecto-Individual/utils/

16. Lectura de parámetros de entrada.
    - API_EV/utils/put.js
    - Proyecto-Individual/utils/post.js

17. Funcionamiento general del aplicativo
    - 
```
* Conexión a Base de Datos
```
18. Manejo de conexión a base de datos desde Node
    - API_EV/config/database.js
    - API_EV/app/models

19. Manejo y ejecución de consultas desde Node
    - API_EV/utils

20. Uso de Express
    - API_EV
```
