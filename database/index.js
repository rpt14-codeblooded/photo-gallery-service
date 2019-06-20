const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery', {useNewUrlParser: true})
.then(() => {
  console.log('DB connected');
})
.catch((err) => {
  console.log('DB error: ', err);
})

const pictureSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true
  },
  id: {
    type: String,
    unique: true
  }
})

const Picture = mongoose.model('Picture', pictureSchema);

const create = (url, cb) => {
  const newPicture = new Picture({url});
  newPicture.save((err, pic) => {
    err ? cb(err) : cb(null, pic);
  })
}

const get = (id, cb) => {
  Picture.find({id}, (err, res) => {
    err ? cb(err) : cb(null, res);
  })
}

//only run once
const populateDb = () => {
  var fileNum = '';
  for (var i = 1; i <= 100; i++) {
    fileNum = i;
    var url = `https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/File${fileNum}.jpg`
    var newPic = new Picture({url, id: i});
    newPic.save();
  }
}
module.exports = {create, populateDb, get};