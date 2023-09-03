const axios = require('axios');
const Shipment = require('../models/shipment');

exports.calculateShipping = async (req, res) => {
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
      const newShipment = new Shipment({
        sender: sender,
        receiver: receiver,
        package: package,
      });
      const savedShipment = await newShipment.save();
      console.log(response.data);
      console.log(savedShipment);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Erro no cálculo do frete:', error);
      res.status(500).json({ error: 'Erro no servidor' });
    }
  };
    