const mongoose = require('mongoose');
const myDB = 'helloMERN'
mongoose.connect(`mongodb://localhost/${myDB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(`DataBase: ${myDB} **Connected**`))
.catch(err => console.log(`DataBase: ${myDB} - Disconnected - ${err}`));;
