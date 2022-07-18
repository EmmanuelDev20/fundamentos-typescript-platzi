## Iniciar la configuracion de Typescript
npx tsc --init

## Transpila codigo ts a js
npx tsc src/hello.ts

## Ejecuta el codigo js con node
node src/hello.js

## Cambiar ubicacion de carpeta de salida
npx tsc src/hello.ts --outDir dist
npx tsc src/cart.ts --outDir dist

## Define la version de JS
npx tsc src/cart.ts --outDir dist --target es6

## rootDir en el archivo de configuracion de ts
rootDir carpeta por defecto que contiene el codigo de trabajo

## outDir en el archivo de configuracion de ts
outDir carpeta de salida de archivos

## Correr transpilador
npx tsc

## Compilar activamente escuchando
npx tsc --watch

## Cast un valor y convertirlo a otro, aunque venga de un any
const rta = (myDynamicVar as string).toLowerCase();
const rta2 = (<number>myDynamicVar);

## Definir el tipo UserID
type UserID = string | number | boolean;

## Restringir el conjunto de datos que recibe
type Sizes = 'S' | 'M' | 'L' | 'XL';

## Usar libreria sin soporte para TS
En lugar de hacerlo asi:
var _ = require('lodash');

Se debe usar el import asi:
import _ from 'lodash';

Por defecto, el lodash no es soportado, por lo que se debe ejecutar el siguiente codigo para darle soporte:

npm i --save-dev @types/lodash
