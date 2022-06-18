const express = require('express');
const faker = require("faker");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
  const output = {
    _id : faker.finance.account(12),
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    email : faker.internet.exampleEmail(),
    phoneNumber : faker.phone.phoneNumber('(###) ###-####'),
    password : faker.random.alphaNumeric(10)
  }
  return output;
}

const createCompany = () => {
  const output = {
    _id : faker.datatype.uuid(),
    name : faker.company.companyName(),
    address : {
      street : faker.address.streetAddress(),
      city : faker.address.city(),
      state : faker.address.state(),
      zipCode : faker.address.zipCode(),
      country : faker.address.country()
    }
  }
  return output;
}

app.get("/api/user/new", (request, response) => {
  console.log("newUser route");
  response.json(createUser());
});

app.get("/api/company/new", (request, response) => {
  console.log("newCompany route");
  response.json(createCompany());
});

app.get("/api/user/company", (request, response) => {
  console.log("ucCombine route");
  const company = createCompany();
  const user = createUser();
  response.json({
    user : user,
    company : company
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`) )