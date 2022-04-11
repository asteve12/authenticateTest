const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kevin:Abcd123@cluster0.yery4.mongodb.net/chatApp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`Connected to successfully...`));

exports.mongoose = mongoose;
