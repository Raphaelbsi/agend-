var mongoose = require('mongoose');

var agendaSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  estadoCivil: String,
  cpf: Number,
  cidade: String,
  estado: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Agenda', agendaSchema);