const menu = require('../data/menu-data.js');

const resolvers = {
  Query: {
    menu: () => menu,
  },
};

module.exports = resolvers;
