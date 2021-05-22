const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {collection: "news"});

module.exports = mongoose.model("news", newsSchema);


