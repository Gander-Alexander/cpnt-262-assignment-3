// The connect code from this article
// ref: https://codeforgeek.com/mongodb-atlas-node-js/

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

// replace the uri string with your connection string.
const uri = process.env.MONGODB_URL
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }

   console.log('You are connected...');
   client.close();
});
