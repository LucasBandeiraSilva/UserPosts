import { sequelize, DataTypes } from "./Db.js";


const post = sequelize
  .define("postagens", {
    titulo: {
      type: DataTypes.STRING,
    },
    postagem: {
      type: DataTypes.TEXT,
    },
  })
  
 

  post
  .sync({ force: true })
  .then(() => {
    console.log("Sicronizado!");
  })
  .catch((erro) => {
    console.log("Ocoreu um erro: " + erro);
  });

   export default post
