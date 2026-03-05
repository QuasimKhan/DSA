const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("Server started");

    res.end("This is home page");
});

myServer.listen(8000, () => {
    console.log("Server is running on port 8000");
});
