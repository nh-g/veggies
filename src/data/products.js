export function getDishes() {
  return [
    {
      imgFilePath: "dishes/broccoli.jpg",
      title: "Dreamy Broccoli",
      urlParameter: "dish/broccoli",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "dishes/tomato.jpg",
      title: "tomato",
      urlParameter: "dish/tomato",
      description:
        "Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",
    },
    {
      imgFilePath: "dishes/bean.jpg",
      title: "bean",
      urlParameter: "dish/bean",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "dishes/radish.jpg",
      title: "radish",
      urlParameter: "dish/radish",
      description:
        "Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",
    },
  ];
}

export function getDessert() {
  return [
    {
      imgFilePath: "dessert/berry.jpg",
      title: "berry",
      urlParameter: "dish/berry",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "dessert/cinnamon.jpg",
      title: "cinnamon",
      urlParameter: "dish/cinnamon",
      description:
        "Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",
    },
    {
      imgFilePath: "dessert/banana.jpg",
      title: "banana",
      urlParameter: "dish/banana",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "dessert/melon.jpg",
      title: "melon",
      urlParameter: "dish/melon",
      description:
        "Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",
    },
  ];
}

export function getDrinks() {
  return [
    {
      imgFilePath: "drinks/matcha.jpg",
      title: "matcha",
      urlParameter: "dish/matcha",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "drinks/tea.jpg",
      title: "tea",
      urlParameter: "dish/tea",
      description:
        "Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",
    },
    {
      imgFilePath: "drinks/redtea.jpg",
      title: "redtea",
      urlParameter: "dish/redtea",
      description:
        "Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",
    },
    {
      imgFilePath: "drinks/coffee.jpg",
      title: "coffee",
      urlParameter: "dish/coffee",
      description:
        "Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",
    },
  ];
}

export function getProducts() {
  return [
    {
      id: 1,
      category: "dish",
      title: "dreamy broccoli",
      imgFilePath: "dishes/broccoli.jpg",


      description:
        "Steamed broccoli with the wonderful mixture of green and white of tofu, kombu, miso and rice.         Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",

      ingredients: ["broccoli", "tofu", "kombu", "rice", "miso"],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 500,
        },
        {
          id: 2,
          label: "total fat",
          value: 8,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 2,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 8,
        },
        {
          id: 5,
          label: "sodium",
          value: 5,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 2,
        },
        {
          id: 7,
          label: "fiber",
          value: 6,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 40,
        },
      ],
    },
    {
      id: 2,

      title: "flying tomato",
      imgFilePath: "dishes/tomato.jpg",

      description: "A food which can make you fly. Only tomato, but not just tomato. Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",

      category: "dish",

      ingredients: [
        "olives",
        "zingy lemon",
        "fresh tomatoes",
        "new potatoes",
        "peas",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 3,

      title: "Dancing Bean",
      imgFilePath: "dishes/bean.jpg",

      description: "Let the beans dance in the good mixture of perfect ingredients. Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",

      category: "dish",

      ingredients: [
        "tofu",
        "zingy lemon",
        "chickpeas",
        "new potatoes",
        "onion",
      ],


      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 4,

      title: "Roasted radish",
      imgFilePath: "dishes/radish.jpg",

      description:
        "Roasted radish in Japanese styles. Served with fresh herbs. Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",
      
      category: "dish",

      ingredients: [
        "radish",
        "paprika",
        "apples",
        "rosemary",
        "thyme",
        "sage",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 5,

      title: "Berry sorbet",

      imgFilePath: "dessert/berry.jpg",

      description:
        "Sweet yet tart rhubarb sorbet with salty, crunchy brittle – flavours and textures that go mad in your mouth. Whether it's delicious vegetarian or easy vegan recipes you're after, or ideas for gluten or dairy-free dishes, you'll find plenty here to inspire you.",

      category: "dessert",

      ingredients: [
        "Berry",
        "sugar",
        "lime",
        "vegetal oil",
        "vegan milk",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 400,
        },
        {
          id: 2,
          label: "total fat",
          value: 17,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 6,

      imgFilePath: "dessert/cinnamon.jpg",
      title: "cinnamon",

      description:
        "Just a bite can make you fly. Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",

      category: "dessert",

      ingredients: [
        "cinnamon",
        "hazelnuts",
        "maple syrup",
        "apple",
        "chilli",
        "sea salt",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 7,

      imgFilePath: "dessert/banana.jpg",
      title: "sticky banana",

      description:
        "Sticky-sweet and topped with lightly spiced banana, this makes the perfect afternoon tea treat! Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",

      category: "dessert",

      ingredients: [
        "banana",
        "walnuts",
        "maple syrup",
        "lemon",
        "apple",
        "salt",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 8,

      imgFilePath: "dessert/melon.jpg",
      title: "mojito melon",

      description:
        "Mojito Fruit Salad is a refreshing, non-alcoholic fruit and berry salad that tastes just like a sweet mojito. Vegan desserts do not contain milk nor dairy products (yogurt, butter, cream, cheese, milk permeate, milk chocolate…), eggs, honey and animal gelatin.",

      category: "dessert",
      
      ingredients: [
        "brown sugar",
        "pineapple",
        "watermelon",
        "lemon",
        "rhum",
        "mint",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 9,

      title: "magical matcha",
      imgFilePath: "drinks/matcha.jpg",

      description:
        "This richly flavoured matcha takes a while to come alive, so give it a good stir. Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",

      category: "drinks",

      ingredients: [
        "matcha",
        "bacardi rum",
        "sugar",
        "apple juice",
        "orange twist",
        "lemon",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 10,

      title: "ginger tea",
      imgFilePath: "drinks/tea.jpg",

      description:
        "Named at a time when a lot of booze went into this drink, our version is lighter with two kinds of rum rounded off by the tropical fruit flavours. Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",

      category: "drinks",
      
      ingredients: [
        "bacardi rum",
        "Triple Sec",
        "orange juice",
        "cherries",
        "orange twist",
        "lemon",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 150,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 11,

      title: "mai tai",

      imgFilePath: "drinks/redtea.jpg",

      description:
        "Mai Tai is Tahitian for “good”, but we think this tropical cocktail is better than that – it’s South Pacific sunshine in a glass! Get your grass skirts on. Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",

      category: "drinks",
      ingredients: [
        "bacardi rum",
        "Cointreau",
        "orgeat syrup",
        "fresh mint",
        "orange juice",
        "lemon",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
    {
      id: 12,

      title: "Cuba Libre",
      imgFilePath: "drinks/coffee.jpg",

      description:
        "The national drink of Cuba celebrating its independence. There’s more to it than just cola, rum and lime. Cocktails use fun, natural ingredients like maple, beets and waterberry to add color and flavor and are completely free of animal ingredients like milk, eggs and honey that are sometimes found in cocktails",

      category: "drinks",
      
      ingredients: [
        "bacardi oro rum",
        "Cointreau",
        "cola",
        "ice cubes",
        "limes",
        "lemon",
      ],

      nutrition_facts: [
        {
          id: 1,
          label: "calories",
          value: 200,
        },
        {
          id: 2,
          label: "total fat",
          value: 10,
        },
        {
          id: 3,
          label: "saturated fat",
          value: 10,
        },
        {
          id: 4,
          label: "cholesterol",
          value: 10,
        },
        {
          id: 5,
          label: "sodium",
          value: 10,
        },
        {
          id: 6,
          label: "total carbohydrates",
          value: 10,
        },
        {
          id: 7,
          label: "fiber",
          value: 10,
        },

        {
          id: 8,
          label: "sugar",
          value: 10,
        },

        {
          id: 9,
          label: "protein",
          value: 10,
        },
      ],
    },
  ];
}
