const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoLocal');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    // Eixt process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
