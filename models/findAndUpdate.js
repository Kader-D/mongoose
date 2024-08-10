const Person = require('./models/Person');

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    }
  );
};

module.exports = findAndUpdate;
