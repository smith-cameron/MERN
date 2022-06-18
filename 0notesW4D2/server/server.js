const express = require('express');
const faker = require("faker");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/", (request, response) => {
  console.log("root get route");
  response.json({ message: "Hello World" });
});

app.post("/", (request, response) => {
  console.log("root post route");
  response.json({ 
    message: ["String1", "String2", "String3"],
    requestBody: request.body
  });
  // console.log(request);
});

const users = [
  { firstName: "Reimu",  lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae",  lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/users", (request, response) => {
  response.json( users );
});

app.get("/api/faker", (request, response) => {
  const name = faker.name.firstName();
  const email = faker.internet.email();
  const randomPhoneNumber = faker.phone.phoneNumber();
  response.json({
    firstName: name,
    userEmail: email,
    phone: randomPhoneNumber
  });
});
// **************

app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id);
  // assuming this id is the index of the users array we could return one user this way
  res.json( users[req.params.id] );
});

app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});

app.listen(port, () => console.log(`Connected. Listening on port: ${port}`) );