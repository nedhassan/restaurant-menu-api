const request = require('supertest');
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('../src/graphql/schema.js');
const resolvers = require('../src/api/menu.js');
const menu = require('../src/data/menu-data.js');

const server = new ApolloServer({ typeDefs, resolvers });

let url;

beforeAll(async () => {
  const { url: serverUrl } = await server.listen({ port: 0 }); 
  url = serverUrl;
});

afterAll(async () => {
  await server.stop();
});

describe('Menu API', () => {
  it('fetches the full menu', async () => {
    const query = gql`
      query {
        menu {
          appetizers {
            name
            description
            price
          }
          entrees {
            name
            price
          }
          sandwiches {
            cold {
              name
              price
            }
            hot {
              name
              price
            }
          }
        }
      }
    `;

    const response = await request(url)
      .post('/graphql')
      .send({ query: query.loc.source.body });

    // Check if the status code is 200 (success)
    expect(response.status).toBe(200);

    // Check if the menu has the expected structure
    expect(response.body.data.menu.appetizers).toBeInstanceOf(Array);
    expect(response.body.data.menu.entrees).toBeInstanceOf(Array);
    expect(response.body.data.menu.sandwiches).toHaveProperty('cold');
    expect(response.body.data.menu.sandwiches).toHaveProperty('hot');

    // Ensure some data is returned
    expect(response.body.data.menu.appetizers).toHaveLength(menu.appetizers.length);
    expect(response.body.data.menu.entrees).toHaveLength(menu.entrees.length);
    expect(response.body.data.menu.sandwiches.cold).toHaveLength(menu.sandwiches.cold.length);
  });

  it('fetches the correct price type for menu items', async () => {
    const query = gql`
      query {
        menu {
          appetizers {
            name
            price
          }
        }
      }
    `;

    const response = await request(url)
      .post('/graphql')
      .send({ query: query.loc.source.body });

    response.body.data.menu.appetizers.forEach(item => {
      expect(typeof item.price).toBe('number');
    });
  });

  it('returns an empty array if no appetizers are available', async () => {
   const mockResolvers = {
     Query: {
       menu: () => ({
         appetizers: [],
         entrees: menu.entrees,
         sandwiches: menu.sandwiches,
       }),
     },
   };

   const mockServer = new ApolloServer({
     typeDefs,
     resolvers: mockResolvers,
   });

   const { url: mockUrl } = await mockServer.listen({ port: 0 });

   const query = gql`
     query {
       menu {
         appetizers {
           name
           description
           price
         }
       }
     }
   `;

   const response = await request(mockUrl)
     .post('/graphql')
     .send({ query: query.loc.source.body });

   expect(response.body.data.menu.appetizers).toHaveLength(0);

   await mockServer.stop();
 });

});
