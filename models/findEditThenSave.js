const Person = require('./models/Person');

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';
  
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

module.exports = findEditThenSave;
