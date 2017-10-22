var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
  userId: String,
  playerName: String,
  atk: Number,
  def: Number,
  threept: Number,
  percent: Number
})

var Player = mongoose.model('Player', PlayerSchema)
module.exports.Player = Player;
