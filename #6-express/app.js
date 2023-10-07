const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
// express app
const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://hodzicnihad10:4YBGzmcTyFdBA8iQ@node-app.rdducfp.mongodb.net/node-app?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    // listen for requests
    console.log("connected to the db");
    app.listen(3000);
  }).catch((err) => {
    console.log(err);
  })

// register view engine
app.set("view engine", "ejs");
// app.set("views", "views");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));


//blog routes
app.use(blogRoutes);


// 404 page - matches any request if it is not matched to previous
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// mongoose
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog"
//   });
//   blog.save()
//     .then((result) => {
//       res.send(result)
//     }).catch((err) => {
//       console.log(err)
//     });
// })

// app.get("/all-blogs", (req, res) => {
//   Blog.find().
//     then((result) => {
//       res.send(result);
//     }).catch((err) => {
//       console.log(err);
//     })
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("652019d935484f7742fa6473").
//     then((result) => {
//       res.send(result);
//     }).catch((err) => {
//       console.log(err);
//     })
// });