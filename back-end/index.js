const express = require('express');
const bodyParser = require('body-parser'); // Importe o body-parser
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('api/shipping_calculate', async (req, res) => {
  try {
    const { sender, receiver, package } = req.body;
    console.log("Testando");
  } catch (error) {
    console.error('Erro no cálculo do frete:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
