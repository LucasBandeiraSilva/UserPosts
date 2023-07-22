import Express from "express";
import post from "./modules/Post.js";
import { engine } from "express-handlebars";
const app = Express();

//config handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("ola mundo");
});

app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post('/add',(req,res)=>{
  res.send('form recebido')
})

export default app;
