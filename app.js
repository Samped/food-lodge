const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");
const cookieparser = require("cookie-parser")

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieparser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://users:users@users.z2axybq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/fodies", (req, res) => res.render("fodies"));
app.use(authRoutes);

