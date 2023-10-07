const express = require("express");
const blogController = require("../controllers/blogController")
const router = express.Router();

//routes
router.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // res.send("<p>home page</p>"); // automaticly setts in the header content-type parameter
  // res.sendFile("./views/index.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs }); // uses ejs engine to render the view
  res.redirect("/blogs");
});

router.get("/about", (req, res) => {
  // res.send("<p>about page</p>"); // automaticly setts in the header content-type parameter
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// blog routes
router.get("/blogs", blogController.blog_index);

router.post("/blogs", blogController.blog_create_post)

router.get("/blogs/create", blogController.blog_create_get);

router.get("/blogs/:id", blogController.blog_details)

router.delete("/blogs/:id", blogController.blog_delete)



module.exports = router;