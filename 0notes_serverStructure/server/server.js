const express = require('express');
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/", (request, response) => {
  console.log("root get route");
  response.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`) );