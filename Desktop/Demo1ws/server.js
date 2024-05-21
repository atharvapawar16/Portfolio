const webSocket = require("ws");

const servers = new webSocket.server({port: 8000});

servers.on("connection",(ws) => {
    console.log("Server started");
});