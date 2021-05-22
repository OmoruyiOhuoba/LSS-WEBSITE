const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

const connection = "mongodb+srv://lssabuaduser:lssabuadpassword@lssabuadcluster.tshyn.mongodb.net/lssAbuadDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));