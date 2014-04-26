/**
 * Created by terrydonaghe on 4/26/14.
 */
var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(request, response) {
    if(request.url ==="/") {
        console.log("Received request");

        fs.readFile("index.html", function (err, data) {
            if (err) throw err;
            response.end(data);
        });
    }
});

server.listen(8080);

console.log("Server started!");