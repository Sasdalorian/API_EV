# EARTH VOLUNTEERS

> Proyectos Relacionados

* https://github.com/Sasdalorian/Proyecto-Individual.git

* https://github.com/Sasdalorian/API_EV

> Dependencias
### Para instalar Dependencias usar ```npm i```

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

> Crear archivo .env para configurar conexion a la DB y para la encriptacion de token

``` 
    USER_DB= "poner usuario"
    PASS_DB= "poner contraseña"
    HOST_DB= "poner host"
    PORT_DB=5432
    DATABASE_NAME="nombre database"

    JWT_SECRETO="CarlWheezer-GlimpseOfUs(Croussant Remix)"
```

> Ejecutar ```node pruebas.js``` para creacion de tablas predeterminadas

## Rúbrica
* Consulta a la Base de Datos
```
1. Selecciona las columnas requeridas para presentar la información solicitada.
    - API_EV/utils/gets.js (mostrarVoluntariados)

2. Utiliza JOIN para relacionar la información de distintas tablas.
    - API_EV/utils/gets.js (mostrarVoluntariados) // Linea 12

3. Utiliza WHERE para filtrar la información requerida.
    - API_EV/utils/delete.js (deleteVolunt) // Linea 7
    - API_EV/app/controllers/passport.js // Linea 16

4. Utiliza cláusulas de ordenamiento para presentar la información.
    - API_EV/utils/gets.js (topAreasDesc, topAreasAsc) // Linea 72 y Linea 101

5. Utiliza cláusulas de agrupación de información para obtener datos agregados
    - API_EV/utils/gets.js (topAreas) // Linea 40
```
* Algoritmo de cálculo y manipulación de archivos de texto
```
6. Utilización general del lenguaje, sintaxis, selección de tipos de datos, sentencias lógicas, expresiones, operaciones, comparaciones.
    - API_EV/utils/delete.js        -Proyecto-Individual/utils/gets.js
    - API_EV/utils/funciones.js     -Proyecto-Individual/utils/post.js
    - API_EV/utils/gets.js          -Proyecto-Individual/public/js/donacion.js

7. Utilización de sentencias repetitivas.
    - Proyecto-Individual/public/js/voluntariado.js // Linea 7
    
8. Convenciones y estilos de programación.
    - API_EV & Proyecto-Individual

9. Utilización correcta de estructuras de datos
    - API_EV/config/database.js // Conexion DataBase
    - API_EV/utils // CRUD

10. Manipulación de archivos.
    - Proyecto-Individual/utils

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
    - API_EV & Proyecto-Individual

15. Utilización de funciones asíncronas.
    - API_EV/utils
    - API_EV/app
    - Proyecto-Individual/utils/

16. Lectura de parámetros de entrada.
    - API_EV/app/controllers/
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
