import http from 'http';
import { Server } from 'socket.io';
import app from './app';
import { initSocket } from './socket/socket';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // Adjust this for production
        methods: ['GET', 'POST', 'PATCH'],
    },
});

initSocket(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});
