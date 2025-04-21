import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './modules/users/user_routes.js'; // Nota el .js al final
import forumRoutes from './modules/forum/forum_routes.js'; // Nota el .js al final
import subjectRoutes from './modules/subject/subject_routes.js'; // Nota el .js al final
import { corsHandler } from './middleware/corsHandler.js';
import { loggingHandler } from './middleware/loggingHandler.js';
import { routeNotFound } from './middleware/routeNotFound.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import http from 'http';
import { Server } from 'socket.io';
//const cors =require("cors");


dotenv.config(); // Cargamos las variables de entorno desde el archivo .env

const app = express();

const LOCAL_PORT = process.env.SERVER_PORT || 9000;

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API de Usuarios'
        },
        tags: [
            {
              name: 'Users',
              description: 'Rutas relacionadas con la gestión de usuarios',
            },
            {
              name: 'Forum',
              description: 'Rutas relacionadas con el forum',
            },
            {
              name: 'Main',
              description: 'Rutas principales de la API',
            }
          ],
        servers: [
            {
                url: `http://localhost:${LOCAL_PORT}`
            }
        ]
    },
    apis: ['./modules/users/*.js', './modules/forum/*.js', './modules/subject/*.js'] // Asegúrate de que esta ruta apunta a tus rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json());
app.use(loggingHandler);
app.use(corsHandler);
// Initialize Socket.IO with the HTTP server
const SOCKET_PORT = process.env.SOCKET_PORT || 9001;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8081", // Permitir solicitudes desde este origen
        methods: ["GET", "POST"], // Métodos permitidos
    },
});

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    // Escucha mensajes del cliente
    socket.on('send message', (data) => {
        console.log('Mensaje recibido del cliente:', data);

        // Reenvía el mensaje a todos los clientes conectados
        io.emit('receive message', data);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
    });
});

// Inicia el servidor de Socket.IO
httpServer.listen(SOCKET_PORT, () => {
    console.log(`Socket.IO escuchando en http://localhost:${SOCKET_PORT}`);
});

//rutas
app.use('/api', userRoutes);
app.use('/api', forumRoutes);
app.use('/api', subjectRoutes);

// Rutes de prova
app.get('/', (req, res) => {
    res.send('Welcome to my API');
    httpServer.listen(LOCAL_PORT, () => {
    console.log('Server by socket.io: ' + LOCAL_PORT);
    });
});

// Conexión a MongoDB
//mongoose;
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/seminarioExpress')
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.error('DB Connection Error:', error));

// Iniciar el servidor
app.listen(LOCAL_PORT, () => {
    console.log('Server listening on port: ' + LOCAL_PORT);
    console.log(`Swagger disponible a http://localhost:${LOCAL_PORT}/api-docs`);
});
