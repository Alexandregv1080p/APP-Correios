const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/shipping_calculate', async (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    const { sender, receiver, package } = req.body;
    const response = await axios.post('https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate', {
      sender: sender,
      receiver: receiver,
      package: package
    });

    console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro no cálculo do frete:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
