const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery', {useNewUrlParser: true})
.then(() => {
  console.log('DB connected');
})
.catch((err) => {
  console.log('DB error: ', err);
})

const pictureSchema = new mongoose.Schema({
  url: String
})

const Picture = mongoose.model('Picture', pictureSchema);

const create = (url, cb) => {
  const newPicture = new Picture({url});
  newPicture.save((err, pic) => {
    err ? cb(err) : cb(null, pic);
  })
}

module.exports = {create};