// cSpell:Ignore usuario, versao   
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const InicializaMongoServer = require("./config/db")
const usuario = require("./routes/usuario")


InicializaMongoServer();

const app = express();
lt
const PORT = process.env.PORT || 4000;

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');  
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();  
});

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ mensagem: "👏 API 100% funcional!", versao: "1.1.01" })
})
/* Rotas do Usuário */
app.use("/usuario", usuario)

app.listen(PORT, (req, res) => {
  console.log(`🖥️ Servidor iniciado na porta ${PORT}`);
});


