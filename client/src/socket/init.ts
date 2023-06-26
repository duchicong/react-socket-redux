import { io } from "socket.io-client";

const WS_ENDPOINT = process.env.REACT_APP_SOCKET || '';
const socket = io(WS_ENDPOINT, { autoConnect: false });
// socket.connect();

// // handle get message from server
// export function on(type = 'message', fn: (data: any) => void) {
//   socket.on(type, fn);
// }

// // handle emit message to server
// export function emit (data: any, type = 'message') {
//   socket.emit(type, data)
// }

export default socket;