const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const { v4 : uuidv4 } = require('uuid');
uuidv4();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(), 
        username : "Sejal Raghorte",
        content : "Sacrifice for what you want, otherwise what you want becomes a sacrifice."
    },
    {
        id : uuidv4(),
        username : "Kriday Kukde",
        content : "If you want something you never had you have to do something you never have done."
    },
    {
        id : uuidv4(),
        username : "Prisha Kharabe",
        content : "Once you decide that you can do it then no power in the world can stop you.Keep Hustling!!"
    }
]

app.get("/posts", (req,res) => {
   res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{ post });
    console.log(post);
});

app.patch("/posts/:id", (req,res) => {
      let {id} = req.params;
      let newContent = req.body.content;
      let post = posts.find((p) => id === p.id);
      post.content = newContent;
      console.log(post);
    //   res.send(`Patch request working!`);
      res.redirect("/posts");

})

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}.`);
});