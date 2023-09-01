const express = require('express');
const app = express();
const port = 3001; 

app.post('/api/calculate-shipping', async (req, res) => {
    try {
      const { sender, receiver, package } = req.body;
  
      const calculatedShipping = calculateShipping(sender, receiver, package);
        res.json(calculatedShipping);
    } catch (error) {
      console.error('Erro no cálculo do frete:', error);
      res.status(500).json({ error: 'Erro no servidor' });
    }
  });
  