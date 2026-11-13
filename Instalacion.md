# Curso de Typescript


#### Instalacion
```
    npm install -g typescript
```

Esto instala typescript de forma global en nuestro equipo 

#### Comando para convertir un archivo TS en JS
```
    tsc index.ts
```

Esto cambia la extension del archivo, además de como están declaradas las variables

#### Ejecutar archivo

Para poder ejecutar el archivo podemos escribir lo siguiente

```
    node index.ts
```

Pero para poder automatizar la ejecución, primero crearemos el **package.json** con el siguiente comando

```
    npm init -y
```

Esto crea el **package.json** con las opciones por defecto, en este archivo agregaremos un **Script** para que se cree el archivo **JS** además de que se ejecute el código generado

```
     "scripts": {
         "start": "tsc index.ts && node index.js"
      }
```

Luego para poder ejecutar el archivo escribimos lo siguiente en la terminal

```
     npm start
```

Lo que nos devuelve lo siguiente

```
     > curso-typescript@1.0.0 start
     > tsc index.ts && node index.js

     Es Mayor de edad => Este es el resultado de le ejecución de nuestro código base
```

Con estas configuraciones básicas tenemos lista la base de nuestro entorno de trabajo.

