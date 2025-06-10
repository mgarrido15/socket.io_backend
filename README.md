# Prova API

## Descripció
Una API bàsica desenvolupada en Node.js amb TypeScript, utilitzant Express i Mongoose per a la gestió de dades en MongoDB. A més, s'inclou documentació amb Swagger.

## Requisits previs
Abans d'executar el projecte, assegura't de tenir instal·lat:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Instal·lació
Clona el repositori i executa la següent comanda per instal·lar les dependències:

```sh
npm install
```

## Configuració
Crea un fitxer `.env` a la arrel del projecte i defineix les següents variables d'entorn:
```env
MONGO_URI=mongodb://localhost:27017/la_teva_base_de_dades
PORT=9000
```

## Execució
Per iniciar l'API en mode desenvolupament:

```sh
npm start
```

## Documentació
Swagger està disponible a:
```
http://localhost:9000/api-docs
```

## Dependències Principals
- `dotenv`: Gestió de variables d'entorn.
- `mongodb` i `mongoose`: Base de dades MongoDB.
- `swagger-jsdoc` i `swagger-ui-express`: Generació de documentació.
- `express`: Framework per a l'API.

## Dependències de Desenvolupament
- `typescript`: Suport per a TypeScript.
- `@types/*`: Definicions de tipus per a biblioteques utilitzades.

En este seminario me he guiado de copilot para que me ayude a ser mas rapido a la hora de escribir codigo, de crearme los JSON para probarlos con POSTMAN, para entender el codigo etc. También he adaptado el codigo que ya tenia creado en el proyecto que tenemos demomento. He repasado e interiorizado conceptos. 

## Fonts utilitzades
- Videos dels companys.

