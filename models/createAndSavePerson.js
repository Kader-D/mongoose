const Person = require('./models/Person');

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger'],
  });

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

module.exports = createAndSavePerson;
