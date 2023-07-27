import Express, { json } from "express";
import post from "./modules/Post.js";
import { engine } from "express-handlebars";
const app = Express();

//traduzir os dados do formulário para algo que o aplicação possa entender.
app.use(Express.urlencoded({ extended: false }));

//permitindo o express ler o json
app.use(Express.json());

//config handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("ola mundo");
});

app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  post
    .create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    })
    .then(() => {
      res.redirect("/home");
    })
    .catch((erro) => {
      return res
        .status(500)
        .json({ mensagem: "erro de conexão ao banco de dados", erro: erro });
    });
});
app.get("/home", (req, res) => {
  post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
    res.render("home", { posts: posts });
  });
});

app.get("/delete/:id", (req, res) => {
  post.findOne({ where: { id: req.params.id } }).then((post) => {
    if (!post) {
      return res.status(404).json({ erro: "post não encontrado" });
    }
    post
      .destroy({ where: { id: req.params.id } })
      .then(() => {
        return res.status(200).json({ mensagem: "sucesso na exclusão" });
      })
      .catch((erro) => {
        return res.status(500).json({ mensagem: erro });
      })
      .catch((erro) => {
        return res
          .status(500)
          .json({ mensagem: "erro de conexão ao banco de dados" });
      });
  });
});
export default app;
