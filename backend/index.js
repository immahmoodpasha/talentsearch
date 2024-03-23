const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const jwt = require('jsonwebtoken')
const app = express()
const nodemailer = require('nodemailer');
app.use(cors())

app.use(express.json(({ limit: "10mb" })))

const PORT = process.env.PORT || 8080
//mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err))
//schema
const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
})
//model
const userModel = mongoose.model("user", userSchema)


app.get("/", async (req, res) => {
    res.send("Server is running")
})

app.post("/signup", (req, res) => {
    console.log(req.body)
    const { email } = req.body
    userModel.findOne({ email: email })
        .then((data) => {
            if (data) {
                res.send({ message: "email id is already registered", alert: false })
            }
            else {
                const result = userModel(req.body)
                const save = result.save()
                res.send({ message: "successfully sign up", alert: true })
            }
        }
        )
        .catch((err) => res.send({ message: "successfully registered" }))
})

app.post("/get-user/:userid", (req, res) => {
    const userId = req.params.userid;
    userModel.findOne({ userId })
        .then((details) => {
            res.send(details);
         })
        .catch((err) => res.send({ message: "couldn't find user details"}))
})

//login
app.post("/login", (req, res) => {
    console.log(req.body);
    const { email } = req.body
    userModel.findOne({ email: email })
        .then((data) => {
            if (data) {
                const dataSend = {
                    email: data.email,
                    username: data.username
                };
                console.log(dataSend)
                res.send({ message: "login successful", alert: true, data: dataSend })
            }
            else {
                res.send({ message: "login unsuccess", alert: false })
            }
        })

})


//product storing in backend
const productSchema = mongoose.Schema({
    Location: String,
    who_can_see: String,
    image: String,
    price: String,
    Thoughts: String,
})
//model
const productModel = mongoose.model("post", productSchema)

//api upload post
app.post("/uploadProduct", (req, res) => {
    console.log(req.body);
    const data = productModel(req.body)
    data.save()
    console.log("object")
    res.send({ message: "upload succesfully" })
})
//api to post jobs
const JobSchema = mongoose.Schema({
    Location: String,
    Role: String,
    Duration: String,
    Salary: String,
    Description: String,
    Email : String,
})
//model
const JobModel = mongoose.model("job", JobSchema)

//api upload post
app.post("/uploadJob", (req, res) => {
    console.log(req.body);
    const data = JobModel(req.body)
    data.save()
    console.log("object")
    res.send({ message: "upload succesfully" })
})
//api get products
app.get("/product", async (req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

app.get("/jobss", async (req, res) => {
    const data = await JobModel.find({})
    res.send(JSON.stringify(data))
})

app.post("/profile/email", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    console.log('object : ',  email) // Correctly extract email from params
    userModel
      .findOne({ email: email })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        res.sendStatus(500);
      });
  });
  
//
app.post("/forgot-password", async (req, res) => {
    const { email } = req.body
    userModel.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.send({ Status: "User not there" })
            }
            const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'mahmoodpashashaik25@gmail.com',
                    pass: 'wozp gigg zgdz sdzv'
                }
            });

            var mailOptions = {
                from: 'mahmoodpashashaik25@gmail.com',
                to: 'mahmoodpashashaik25@gmail.com',
                subject: 'resetpassword',
                text: `http://localhost:3000/reset_password/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })
})
// Define schema for the ExposEvent collection
const exposEventSchema = mongoose.Schema({
    Contractors: String,
    Date: String, // Change the type to Date
    Domain: String,
    Time: String
});


// Define model for the ExposEvent collection
const ExposEventModel = mongoose.model("ExposEvent", exposEventSchema);

//api to get expos
//api to get expos
app.get("/Exposevent", async (req, res) => {
    try {
        // Retrieve all documents from the ExposEvent collection and sort by Date in ascending order
        const expos = await ExposEventModel.find({}).sort({ Date: 1 });
        console.log(expos);
        res.json(expos); // Sending the JSON response
    } catch (error) {
        console.error('Error fetching expos:', error);
        res.status(500).json({ message: 'Internal server error' }); // Sending an error response
    }
});



app.listen(PORT, () => console.log("server is running at port : " + PORT))
