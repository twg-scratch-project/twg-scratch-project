const mongoose = require('mongoose');
const dotenv = require('dotenv');

// const connectENV = require('./.env');
// connectENV();

dotenv.config({ path: './server/.env' });

const app = require('./app');

// console.log('DATAB', process.env.DATABASE);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

module.exports = server;
