import Express from "express";
import post from  './modules/Post.js';

const app = Express();

app.get("/", (req, res) => {
  res.send("ola mundo");
});

export default app;
