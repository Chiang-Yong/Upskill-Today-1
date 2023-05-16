const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//backend server port
const port = 5000;
//const uri = 'mongodb+srv://mongo:mongo@clusterheng.uam6uok.mongodb.net/UpskillToday';

mongoose.set('strictQuery', false);

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://mongo:mongo@clusterheng.uam6uok.mongodb.net/UpskillToday',
//mongoose.connect(url, 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
 console.log('MongoDB connection established successfully');
});

connection.on('error', (error) => {
  console.error(error);
});

//Create a data schema
const registrationSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    contact: String,
    program: String,
    country: String},
    {timestamps:true}
)

//Create a intouch data schema
const intouchSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  contact: String,
  subject: String,
  message: String,},
  {timestamps:true}
)

//Create a corporate data schema
const corporateSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  contact: String,
  company: String,
  country: String,},
  {timestamps:true}
)

//Create a Mongoose model for corporate data
const CorporateData = mongoose.model('coporate', corporateSchema);

// Create a Mongoose model for Get In Touch data
const IntouchData = mongoose.model('intouch', intouchSchema);

// Create a Mongoose model for Registration data
const FormData = mongoose.model('registration', registrationSchema);

app.get("/", function(req, res){
    res.send("express is working")
})

app.use(cors());
app.use(bodyParser.json());


// POST request handler for the API endpoint
app.post('/api/registration', (req, res) => {

// Create a new FormData object with the request body data
  const formData = new FormData(req.body);

 // const current_date = new Date();
  formData.createdAt = new Date();
  formData.updatedAt = new Date();

  // Save the form data to the database
  formData.save()
    .then(() => {
      res.send('Successfully saved form data to the database');
    })
    .catch((error) => {
      console.error(error);
      res.send('Error saving form data to the database');
    });
});

// POST request handler for the API endpoint
app.post('/api/intouch', (req, res) => {

  // Create a new intouchData object with the request body data
    const intouchData = new IntouchData(req.body);
    
    //Timestamp for input data
    intouchData.createdAt = new Date();
    intouchData.updatedAt = new Date();

    // Save the form data to the database
    intouchData.save()
      .then(() => {
        res.send('Successfully saved form data to the database');
      })
      .catch((error) => {
        console.error(error);
        res.send('Error saving form data to the database');
      });
  });


  app.post('/api/corporate', (req, res) => {

    // Create a new intouchData object with the request body data
      const corporateData = new CorporateData(req.body);
    
      //Timestamp for input data
      corporateData.createdAt = new Date();
      corporateData.updatedAt = new Date();
      // Save the form data to the database
      corporateData.save()
        .then(() => {
          res.send('Successfully saved form data to the database');
        })
        .catch((error) => {
          console.error(error);
          res.send('Error saving form data to the database');
        });
    });
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});