const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  sender: {
    fullname: String,
    cpf: String, 
    phone: String, 
    email: String,
    address: {
      cep: String, 
      state: String,
      uf: String,
      city: String,
      neighborhood: String,
      street: String,
      number: String, 
      complement: String
    }
  },
  receiver: {
    fullname: String,
    cpf: String, 
    phone: String, 
    email: String,
    address: {
      cep: String, 
      state: String,
      uf: String,
      city: String,
      neighborhood: String,
      street: String,
      number: String, 
      complement: String
    }
  },
  package: {
    weight: Number, 
    height: Number, 
    width: Number, 
    length: Number, 
    reverse: Boolean,
    ar: Boolean,
    own_hands: Boolean,
    information: {
      amount: Number, 
      quantity: Number, 
      description: String
    }
  }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
