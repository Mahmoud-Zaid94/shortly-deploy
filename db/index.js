const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher2');



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("====================We're connected!");
});



let repoSchema = mongoose.Schema({
  username: {type: String, trim: true, default: ''},
  password: {type: String, trim: true, default: ''}

});

let Repo = mongoose.model('Repo', repoSchema);




module.exports.Repo = Repo;
