const mongoose = require('mongoose');
const { DATABASE } = require('../index');


const db = DATABASE.MONGODB_URL 


const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(`MongoDB connection failed due to: ${err.message}`);
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;