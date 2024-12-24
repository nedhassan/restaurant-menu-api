
# Menu API with Apollo GraphQL

This project implements a simple restaurant menu API using Apollo GraphQL and Node.js. The API allows users to query the menu items and their details, including appetizers, entrees, and sandwiches. The API is designed to handle various queries and responses, providing a seamless experience for managing and viewing the restaurant's menu.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [GraphQL Queries](#graphql-queries)
4. [Running Tests](#running-tests)
5. [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/menu-api.git
   cd menu-api
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Start the server:**

   After installing the dependencies, you can start the Apollo Server to run the GraphQL API:

   ```bash
   npm start
   ```

   By default, the server will run on `http://localhost:4000/graphql`.

2. **GraphQL Playground:**

   You can open the GraphQL Playground by navigating to `http://localhost:4000/graphql` in your browser. This will allow you to interact with the API and run GraphQL queries.

## GraphQL Queries

The API provides the following GraphQL queries:

### `menu`
Fetch the entire menu, including appetizers, entrees, and sandwiches:

```graphql
query {
  menu {
    appetizers {
      name
      description
      price
    }
    entrees {
      name
      description
      price
    }
    sandwiches {
      name
      description
      price
    }
  }
}
```

### Example Response:
```json
{
  "data": {
    "menu": {
      "appetizers": [
        {
          "name": "Iceberg Wedge Salad with House Cured Bacon",
          "description": "tomato salsa gorgonzola",
          "price": 7.5
        },
        {
          "name": "Sautéed Shredded Brussels Sprouts",
          "description": "bacon hazelnuts gorgonzola",
          "price": 6.95
        }
      ],
      "entrees": [
        {
          "name": "Grilled Salmon",
          "description": "grilled with lemon herb butter",
          "price": 18.99
        }
      ],
      "sandwiches": [
        {
          "name": "Classic BLT",
          "description": "crispy bacon, lettuce, tomato, mayo",
          "price": 7.5
        }
      ]
    }
  }
}
```

### `appetizers`
Fetch only the appetizers:

```graphql
query {
  menu {
    appetizers {
      name
      description
      price
    }
  }
}
```

## Running Tests

The project uses Jest to run tests and validate the API functionality. You can run the tests to ensure everything works as expected.

1. **Run all tests:**

   ```bash
   npm test
   ```

2. **Test output:**

   The tests will run and output the result in the terminal. If all tests pass, you will see something like this:

   ```bash
   PASS  tests/menu.test.js
     Menu API
       ✓ fetches the full menu (51 ms)
       ✓ fetches the correct price type for menu items (8 ms)
       ✓ returns an empty array if no appetizers are available (5 ms)
   ```

## License

This project is licensed under the MIT License.
