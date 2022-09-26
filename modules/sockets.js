const socket = require("socket.io");

const users = [];

module.exports = (http) => {
  const io = socket(http, { cors: { origin: "http://localhost:3000" } });

  // io.on("connect", (socket) => {
  //   socket.on("login", (user) => {
  //     console.log(user);
  //     const newUser = {
  //       user,
  //       id: socket.id,
  //     };
  //     users.push(newUser);

  //     console.log(users);
  //   });

  // socket.on("reserve", (data) => {
  //   const user = helpers.getUser(socket.id);
  //   const { seatsIndex: seat } = data;

  //   tickets[seat].reserved = user.username;
  //   helpers.emitSeatsToOnlineUsers(io);
  // });
  // });
};
