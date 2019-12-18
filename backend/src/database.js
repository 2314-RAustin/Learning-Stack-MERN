const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ?rocess.env.MONGODB_URI:'mongodb://localhost/mernstack';
console.log(URI)

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB Is connected');
});