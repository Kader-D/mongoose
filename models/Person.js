//importation de mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('MONGO_URI');

}

//création de schéma pour personne
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

//compilation du schéma dans un modèle
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
