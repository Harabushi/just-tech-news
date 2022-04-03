const { User } = require('../models');

const userData = [
  {
    username: "harabushi",
    email: "harabushi@gmail.com",
    password: "password1234"
  },
  {
    username: "hellPig",
    email: "hellPig@gmail.com",
    password: "password4321"
  },
  {
    username: "kanbie",
    email: "kanbie@gmail.com",
    password: "1234password"
  },
  {
    username: "defrain",
    email: "defrain@gmail.com",
    password: "4321password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;