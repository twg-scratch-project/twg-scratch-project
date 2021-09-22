const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dbUser:tCI8rFyyrGiBGSpk@cluster0.a9nel.mongodb.net/financediary?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'financediary',
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const helloWorldSchema = new Schema({
    name: String,
    numberVal: Number,
});

const HelloWorld = mongoose.model('helloworld', helloWorldSchema);

module.exports = {HelloWorld};