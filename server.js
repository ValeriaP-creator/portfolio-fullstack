const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/api/message") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
      message: "Ciao dal backend!"
    }));

  } else {

    res.writeHead(404);
    res.end("Pagina non trovata");

  }

});

server.listen(3000, () => {
  console.log("Server avviato su http://localhost:3000");
});async function getMessage() {

  const response = await fetch("http://localhost:3000/api/message");

  const data = await response.json();

  document.getElementById("backendMessage").textContent =
    data.message;
}