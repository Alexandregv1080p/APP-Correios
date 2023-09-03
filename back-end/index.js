const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rateLimit = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 100,
  message: "Limite de solicitações excedido. Tente novamente mais tarde.",
})

mongoose.connect('mongodb://localhost/shipment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
    app.listen(port, () => {
      console.log(`Servidor está rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  });

const apiRoutes = require('./routes/api');
app.use("/api", limiter);
app.use('/api', apiRoutes);
