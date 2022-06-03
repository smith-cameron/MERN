const mongoose = require('mongoose');
const myDB = 'jokesDb';
mongoose.connect(`mongodb://localhost/${myDB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB Connected'))
.catch(err => console.log('DB Disconnected', err));