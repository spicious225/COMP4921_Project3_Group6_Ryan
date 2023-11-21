require('dotenv').config();

const mongodb_host = process.env.REMOTE_MONGODB_HOST;
const mongodb_user = process.env.REMOTE_MONGODB_USER;
const mongodb_password = process.env.REMOTE_MONGODB_PASSWORD;


const MongoClient = require("mongodb").MongoClient;
const atlasURI = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/?retryWrites=true`;
var database = new MongoClient(atlasURI, {useNewUrlParser: true, useUnifiedTopology: true});
module.exports = database;