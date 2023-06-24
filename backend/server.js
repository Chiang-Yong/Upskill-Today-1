const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

const allowedOrigins = [
  `https://upskilltoday-admin-app-chiang-yong.vercel.app`,
  `https://upskilltoday-admin-app.vercel.app`,
  `https://upskill-today-123-chiang-yong.vercel.app`,
  `https://upskill-today-123.vercel.app`,
]
//Cross Origin Resource Sharing to allow sharing other domain, scheme, port resources
app.use(
  cors({
    credentials: true,
  //  origin: `https://upskilltoday-admin-app-chiang-yong.vercel.app`,
 origin: function (origin, callback){
  if(allowedOrigins.includes(origin)){
    callback(null,true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
 }
})
);
app.use(cookieParser());

app.use((req, res, next) => {
//  res.header(
//    "Access-Control-Allow-Origin",
//    "https://upskilltoday-admin-app-chiang-yong.vercel.app"
//  );
const requestOrigin = req.headers.origin;
console.log("CORS allowed: ", requestOrigin)
  if (allowedOrigins.includes(requestOrigin)) {
    console.log("CORS allowed: ", requestOrigin)
  res.header("Access-Control-Allow-Origin", requestOrigin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//backend server port
const port = 5000;

//Bcrypt
const salt = bcrypt.genSaltSync(10);
const secret = "ghz%45ud6a7k42h7ag4g3e$y$5j3jf7dk#2h3k2";

mongoose.set("strictQuery", false);

// Connect to the MongoDB database
mongoose.connect(`${process.env.MONGO_PROD_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

connection.on("error", (error) => {
  console.error(error);
});

//Create a data schema
const registrationSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    contact: String,
    program: String,
    country: String,
    term: String,
    policy: String,
    free: String,
  },
  { timestamps: true }
);

//Create a intouch data schema
const intouchSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    contact: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

//Create a corporate data schema
const corporateSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    contact: String,
    company: String,
    country: String,
  },
  { timestamps: true }
);

//May be good - define User Model outside Server.js
const User = require("./model/User");

const chatbotMessagesCollection = require("./model/ChatBotMessage");

//Create a Mongoose model for corporate data
const CorporateData = mongoose.model("corporate", corporateSchema);

// Create a Mongoose model for Get In Touch data
const IntouchData = mongoose.model("intouch", intouchSchema);

// Create a Mongoose model for Registration data
const RegisterData = mongoose.model("registration", registrationSchema);

//This is just to test that the backend express is working by entering
//http://localhost:5000/
app.get("/", function (req, res) {
  res.send("express is working");
});

app.get("/api", (req, res) => {
  res.send("Express is up at " + Date.now());
});

//To retrieve the registrants' data from MongoDB
app.get("/api/register", async (req, res) => {
  try {
    const registerData = await RegisterData.find(
      {},
      { projection: { _id: 0 } }
    );
    //   console.log("Register Data: ", registerData)
    res.json(registerData);
  } catch (error) {
    console.error("Error receiving registrants' data: ", error);
    res.status(500).json({ error: "Failed to retrieve registrants' data" });
  }
});

//To retrieve the Corporate' data from MongoDB
app.get("/api/corporate", async (req, res) => {
  try {
    const corporateData = await CorporateData.find(
      {},
      { projection: { _id: 0 } }
    );
    //   console.log("Corporate Data: ", corporateData)
    res.json(corporateData);
  } catch (error) {
    console.error("Error receiving corporate' data: ", error);
    res.status(500).json({ error: "Failed to retrieve corporate' data" });
  }
});

//To retrieve the Get In Touch' data from MongoDB
app.get("/api/getintouch", async (req, res) => {
  try {
    const intouchData = await IntouchData.find({}, { projection: { _id: 0 } });
    //   console.log("Get In Touch Data: ", intouchData)
    res.json(intouchData);
  } catch (error) {
    console.error("Error receiving Get In Touch data: ", error);
    res.status(500).json({ error: "Failed to retrieve Get In Touch' data" });
  }
});

//To retrieve the Users' data from MongoDB
app.get("/api/users", async (req, res) => {
  try {
    const userData = await User.find({}, { projection: { _id: 0 } });
    //   console.log("User: ", userData)
    res.json(userData);
  } catch (error) {
    console.error("Error receiving Users data: ", error);
    res.status(500).json({ error: "Failed to retrieve users' data" });
  }
});

// Assuming you have a collection called "chatbotMessages"
//const chatbotMessagesCollection = client.db(ChatBot).collection('chatbotMessages');

const getUserInputResponse = async (userInput) => {
  try {
    // Retrieve chatbot messages based on user input response
    const chatbotMessages = await chatbotMessagesCollection
      .find({ userInputResponse: userInput })
      .toArray();

    return chatbotMessages;
  } catch (error) {
    console.error("Error retrieving chatbot messages:", error);
    throw error;
  }
};

// POST request handler for the API endpoint
app.post("/api/registration", (req, res) => {
  // Create a new RegisterData object with the request body data
  const RegisterData = new RegisterData(req.body);

  // const current_date = new Date();
  RegisterData.createdAt = new Date();
  RegisterData.updatedAt = new Date();

  // Save the form data to the database
  RegisterData.save()
    .then(() => {
      res.send("Successfully saved form data to the database");
    })
    .catch((error) => {
      console.error(error);
      res.send("Error saving form data to the database");
    });
});

// POST request handler for the API endpoint
app.post("/api/intouch", (req, res) => {
  // Create a new intouchData object with the request body data
  const intouchData = new IntouchData(req.body);

  //Timestamp for input data
  intouchData.createdAt = new Date();
  intouchData.updatedAt = new Date();

  // Save the form data to the database
  intouchData
    .save()
    .then(() => {
      res.send("Successfully saved form data to the database");
    })
    .catch((error) => {
      console.error(error);
      res.send("Error saving form data to the database");
    });
});

// POST request handler for the API corporate endpoint
app.post("/api/corporate", (req, res) => {
  // Create a new intouchData object with the request body data
  const corporateData = new CorporateData(req.body);

  //Timestamp for input data
  corporateData.createdAt = new Date();
  corporateData.updatedAt = new Date();
  // Save the form data to the database
  corporateData
    .save()
    .then(() => {
      res.send("Successfully saved form data to the database");
    })
    .catch((error) => {
      console.error(error);
      res.send("Error saving form data to the database");
    });
});

app.post("/api/addusers", async (req, res) => {
  const { firstName, lastName, email, password, roles, termPolicy } = req.body;

  //method 1 - define the schema within the server.js and save() is used.
  /* const userDoc = new UserModel(req.body);
     
      userDoc.password = bcrypt.hashSync(password, salt);
      userDoc.createdAt = new Date();
      await userDoc
        .save()
        .then(() => {
          res.send("success");
        })
        .catch((err) => {
          console.error(err);
          res.send("Error saving data to the database");
        });
     */
  //Another method 2 - using User.js outside the server.js and create() is used
  try {
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, salt),
      termPolicy,
    });
    res.json(userDoc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  // console.log("User Email: " + userDoc.email);
  // console.log("User Password: " + password);
  // console.log("User Info: " + userDoc)
  if (!userDoc) {
    console.log("User does not exist!");
    const errorMsg = { Code: 11111, Error: "User does not exist!!!" };
    return res.send(errorMsg);
  }
  const passOK = bcrypt.compareSync(password, userDoc.password);

  if (passOK) {
    res.send(userDoc);
    jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        email,
      });
    });
  } else {
    res.status(400).json("Wrong Credentials!");
  }
});

//Link to Upskill Today Admin App - header.js
app.get("/user", async (req, res) => {
  const { email } = req.body;
  const userDoc = await User.findOne({ email });
  res.json(userDoc);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// Function to send notification email
const sendNotificationEmail = () => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "gecoupskill@hotmail.com",
      pass: "",
    },
  });

  const mailOptions = {
    from: "gecoupskill@hotmail.com",
    to: "chiangyong.heng@geco.asia",
    subject: "Dashboard Notification",
    text: "There are new updates in the dashboard.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Notification email sent:", info.response);
    }
  });
};

//  console.log("Process Env port:   " + process.env.API_PORT);
app.listen(port, () => {
  //console.log(`Server listening on port ${port}`);
  console.log(`Server listening on port ` + process.env.API_PORT);
});

//Export the Express API
module.exports = app;
