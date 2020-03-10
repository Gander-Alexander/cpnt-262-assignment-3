const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');
const gallery = require('./gallery')
const moment = require('moment');


const app = express();

app.set('view engine', 'ejs');


// This is the moment code for the year on the footer's copy right section
app.locals.dateofYear = () => {
  return moment().format('YYYY');
};

app.use(express.urlencoded({
  extended: false
}));


app.get('/', function (req, res) {
  res.render('index', pageInfo.index);
});











app.get('/gallery', function (req, res) {
  app.locals.gallery = require('./gallery');
  res.render('gallery', pageInfo.gallery);
});


app.get('/gallery/:id',function(req, res, next) {
  for (photo of gallery){
    if(photo.id == req.params.id){
      res.render('gallery-id',{title:`${req.params.id}`})
      return;
  }}
  next();
});








app.get('/dilbert', function (req, res) {
  res.render('dilbertC', pageInfo.dilbert);
});

app.get('/register', function (req, res) {
  res.render('register', pageInfo.register);
});


app.get('/register/new', function (req, res) {
  res.render('register-new', pageInfo.newRegister);
});

// I still have yet to make this page work with the css as it does not link for some reason
app.post('/register/new', function (req, res) {
  res.render('register-new', pageInfo.newRegister);
});



app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});