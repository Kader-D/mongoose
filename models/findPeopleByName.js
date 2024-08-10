const Person = require('./models/Person');

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

module.exports = findPeopleByName;
