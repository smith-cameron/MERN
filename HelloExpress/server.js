const express = require("express");
const app = express();
const port = 8000;
//Express middleware functions responsible for providing and parsing the request.body data.
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Houston, we have liftoff on port "+server.address().port+".");
});

//TEMP_USERS_DB
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
//POST_FORM_DATA (CREATE)
app.post("/api/users", (req, res) => {
  // req.body contains the form data
  console.log(req.body);
  users.push(req.body);
  res.json( { status: "Succesfully created user # "+users[id] } );
});

//GET_USER_BY_ID (READ)
app.get("/api/users/:id", (req, res) => {
  //This `id` variable is from req.params
  console.log(req.params.id);
  // assuming this id is the index of the users array we could return one user this way
  res.json( users[req.params.id] );  
});
app.get("/api/users", (req, res) => {
  res.json( users );
});

//PUT_FORM_DATA (UPDATE)
app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  // we always need to respond with something
  res.json( { status: "Succesfully updated user # "+users[id] } );
});

//DELETE_BY_ID (DELETE)
app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "Succesfully deleted user # "+users[id] } );
});

const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}.`)
);