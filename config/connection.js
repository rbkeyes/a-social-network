// const { connect, connection } = require('mongoose');

// const connectionString = 
//     process.env.MongoDb_URI || 'mongodb://localhost:27017/socialDB';


// connect(connectionString, {
//     useNewUrlParser: true,
//     userUnifiedTopology: true,
// },
// err => {
//     if (err) throw err;
//     console.log('connected to MongoDb!')
// });

// module.exports = connection;

// ❓ can connect this way but not connection above, why?
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;
