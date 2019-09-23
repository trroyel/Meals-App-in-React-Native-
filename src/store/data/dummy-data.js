import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Chiness', '#f54242'),
    new Category('c3', 'Indian', '#f5a442'),
    new Category('c4', 'Bengali', '#f5d142'),
    new Category('c5', 'Thai', '#368dff'),
    new Category('c6', 'Kashmiri', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Dinner', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Lunch', '#47fced')
  ];
  
  export const MEALS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Special Biriyani',
      'affordable',
      'simple',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'You Can Make it easily',
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Chicken Biriyani',
      'affordable',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
      10,
      [
        '1'
      ],
      [
        'You can make it easily',
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'French Fry',
      'pricey',
      'simple',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      45,
      [
        '300g Cattle Hack',
      ],
      [
        'You can make it easily'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Hot coffee',
      'luxurious',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
      60,
      [
        '8 Veal Cutlets',
      ],
      [
        'You can make it easlily'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Salad with Smoked Chilly',
      'luxurious',
      'simple',
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      15,
      [
        'Arugula'
      ],
      [
        'You can make it easily'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Orange Juice',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        'Nothing Special'
      ],
      [
        'You can make it easily'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Special Cakes',
      'affordable',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1 1/2 Cups all-purpose Flour'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Creamy Indian Chicken Curry',
      'pricey',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Chocolate Cake',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Special Salad with Tomatoes',
      'luxurious',
      'simple',
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
      30,
      [
        'White and Green Asparagus',
      ],
      [
        'You can make it easily'
      ],
      true,
      true,
      true,
      true
    )
  ];
  