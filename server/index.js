import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
  };

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

app.use(cors(corsOptions));

const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("send-update", (data) => {
        socket.broadcast.emit("receive-update", data);
    });

    socket.on('send-document-name', (data) => {
        socket.broadcast.emit('receive-document-name', data);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
