import { Server } from 'socket.io';

let io: Server;

export const initSocket = (socketIo: Server) => {
    io = socketIo;
};

export const emitDishUpdate = (dish: any) => {
    if (io) {
        io.emit('dishUpdated', dish);
    }
};
