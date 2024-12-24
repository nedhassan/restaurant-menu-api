const menu = {
  appetizers: [
    {
      name: "Iceberg Wedge Salad with House Cured Bacon",
      description: "tomato salsa gorgonzola",
      price: 7.50,
    },
    {
      name: "Sautéed Shredded Brussels Sprouts",
      description: "bacon hazelnuts gorgonzola",
      price: 6.95,
    },
    {
      name: "Kale Salad",
      description: "parmesan crisp corn radish garlic-lemon vinaigrette",
      price: 7.50,
    },
    {
      name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
      description: "grilled tomato salsa crostini",
      price: 6.95,
    },
    {
      name: "Chicken and Cabbage Eggrolls",
      description: "hot & sour dipping sauce",
      price: 6.95,
    },
  ],
  entrees: [
    {
      name: "Farfalle Pasta with Braised Pork in Tomato Cream",
      description: "capers butternut squash kale",
      price: 12.95,
    },
    {
      name: "Stout Braised Bratwurst",
      description: "horseradish mashed potatoes roasted root veggies grilled onion",
      price: 13.95,
    },
    {
      name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
      description: "vegetable sauté golden raisin chutney",
      price: 15.95,
    },
    {
      name: "Sesame Shrimp",
      description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
      price: 13.95,
    },
  ],
  sandwiches: {
    cold: [
      {
        name: "Turkey & Avocado",
        description: "with tomato",
        halfPrice: 7.95,
        fullPrice: 9.25,
      },
      {
        name: "Pub Club",
        description: "turkey, bacon, lettuce, tomato",
        halfPrice: 7.95,
        fullPrice: 9.25,
      },
      {
        name: "Rare Roast Beef & Swiss",
        description: "sweet-hot mustard, lettuce, red onion",
        halfPrice: 7.95,
        fullPrice: 9.25,
      },
      {
        name: "Veggie",
        description: "pepper jack, avocado, sprout, tomato",
        halfPrice: 7.95,
        fullPrice: 9.25,
      },
    ],
    hot: [
      {
        name: "Southwest Chicken Breast",
        description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
        price: 9.50,
      },
      {
        name: "Portobello Fresh Mozzarella",
        description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
        price: 9.50,
      },
      {
        name: "Chipotle BBQ Pork Sandwich",
        description: "with Pickled Jalapeño Slaw",
        price: 9.50,
      },
      {
        name: "Bacon Burger",
        description: "Swiss, Lettuce, Tomato",
        price: 9.25,
      },
      {
        name: "Mexi Burger",
        description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
        price: 9.25,
      },
    ],
  },
  soupAndSalads: [
    {
      name: "French Onion Soup",
      description: "Classic French Onion Soup",
      price: 4.95,
    },
    {
      name: "French Onion or Soup of the Day Combo",
      description: "with small green salad, fresh fruit or house pasta",
      price: 7.25,
    },
    {
      name: "French Onion or Soup of the Day Combo",
      description: "with half pasta of the day",
      price: 8.75,
    },
  ],
  fajitas: [
    {
      name: "Chicken Fajitas",
      description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
      price: 10.95,
    },
    {
      name: "Sirloin Steak Fajitas",
      description: "Onions, Poblano and Bell Peppers, Carrots, Guacamole, Two Salsas",
      price: 10.95,
    },
  ],
  tacos: [
    {
      name: "Beer Battered Fish Tacos",
      description: "Jalapeño Remoulade, Roasted Salsa, Cabbage",
      price: 9.95,
    },
    {
      name: "Carne Asada Tacos",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95,
    },
    {
      name: "Citrus Marinated Chicken Tacos",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95,
    },
    {
      name: "Grilled Veggie Tacos",
      description: "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
      price: 9.95,
    },
  ],
  enchiladas: [
    {
      name: "Enchilada Uno",
      description: "Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 8.50,
    },
    {
      name: "Enchilada Dos",
      description: "Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 9.95,
    },
    {
      name: "Enchilada Tres",
      description: "Southwestern Succotash, Black Beans with Chipotle Crema",
      price: 11.50,
    },
  ],
};

module.exports = menu;
