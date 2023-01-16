import { io } from "socket.io-client";

export const socketId = io.connect(process.env.REACT_APP_SERVER, {
  path: "/socket.io",
});
