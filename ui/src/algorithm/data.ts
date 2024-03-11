export type Product = {
  id: string;
  price: number;
  container: string;
  shop: 'tesco' | 'coop' | 'sainsburys';
  quantity: number;
  unit: 'g' | 'ml' | 'pcs' | 'kg' | 'tbsp' | 'tsp' | 'l' | 'cm';
};

export type Ingredient = {
  id: string;
  quantity: number;
  unit: 'g' | 'ml' | 'pcs' | 'kg' | 'tbsp' | 'tsp' | 'l' | 'cm';
  type: 'pantry' | 'fresh';
};

export type Recipe = {
  id: string;
  name: string;
  ingredients: Ingredient[];
  book: 'yellow' | 'blue' | 'green' | 'red';
  page: number;
  serves: number;
};

export const RECIPES: Recipe[] = [
  {
    // TODO: Mode where it randomises the first recipe.
    id: 'wild-rice',
    name: 'Wild rice winter salad with roasted brussels sprouts, pancetta, feta & sunflower seeds',
    ingredients: [
      { id: 'rice', quantity: 200, unit: 'g', type: 'pantry' },
      { id: 'brussels-sprouts', quantity: 500, unit: 'g', type: 'fresh' },
      { id: 'pancetta', quantity: 80, unit: 'g', type: 'fresh' },
      { id: 'sunflower-seeds', quantity: 50, unit: 'g', type: 'pantry' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'feta', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'parsley', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 120,
    serves: 2
  },
  {
    id: 'paprika-sweetcorn',
    name: 'Paprika roasted sweetcorn with spring onions, feta & lime',
    ingredients: [
      { id: 'sweetcorn', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'paprika', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'lime', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'spring-onions', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'feta', quantity: 75, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 62,
    serves: 5
  },
  {
    // TODO: Write a test that finds outlier recipes so we can fix them.
    id: 'ras-el-hanout-mushrooms',
    name: 'Ras el Hanout slow-roasted mushrooms with pine nuts, halloumi & flat-leaf parsley',
    ingredients: [
      { id: 'chestnut-mushrooms', quantity: 600, unit: 'g', type: 'fresh' },
      { id: 'shallots', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'butter', quantity: 70, unit: 'g', type: 'pantry' },
      { id: 'ras-el-hanout', quantity: 4, unit: 'tsp', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'halloumi', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'pine-nuts', quantity: 30, unit: 'g', type: 'fresh' },
      { id: 'parsley', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'pink-peppercorns', quantity: 2, unit: 'tsp', type: 'fresh' }
    ],
    book: 'yellow',
    page: 78,
    serves: 4
  },
  {
    id: 'pinenut-cod',
    name: 'Crispy olive and pine nut crusted cod with roasted red onions & cherry tomatoes',
    ingredients: [
      { id: 'cod', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'pinenuts', quantity: 15, unit: 'g', type: 'fresh' },
      { id: 'olive-tapenade', quantity: 4, unit: 'tsp', type: 'pantry' },
      { id: 'breadcrumbs', quantity: 15, unit: 'g', type: 'pantry' }
    ],
    book: 'yellow',
    page: 26,
    serves: 2
  },
  {
    id: 'salmon-broccoli',
    name: 'Steam-roasted salmon & broccoli with lime, ginger, garlic & chilli',
    ingredients: [
      { id: 'salmon-fillets', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'spring-onions', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'broccoli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 2.5, unit: 'cm', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'fish-sauce', quantity: 2, unit: 'tbsp', type: 'pantry' },
      { id: 'lime', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'coriander', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'peanuts', quantity: 55, unit: 'g', type: 'fresh' }
    ],

    book: 'yellow',
    page: 30,
    serves: 4
  },
  {
    id: 'chicken-fennel-lemon',
    name: 'Roast chicken with fennel, lemon, shallots, garlic & mustard mayo',
    ingredients: [
      { id: 'fennel', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'shallots', quantity: 12, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'thyme', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'chicken-breast', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'mayonnaise', quantity: 4, unit: 'tbsp', type: 'pantry' },
      { id: 'dijon-mustard', quantity: 2, unit: 'tbsp', type: 'pantry' },
      { id: 'honey', quantity: 2, unit: 'tbsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 44,
    serves: 4
  },
  {
    id: 'chicken-bell-pepper',
    name: 'Simple roast chicken & red pepper traybake',
    ingredients: [
      { id: 'chicken-breast', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'bell-pepper', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'thyme', quantity: 2, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 46,
    serves: 4
  },
  {
    id: 'chicken-squash-red-onion',
    name: 'Roast chicken, squash & red onion with lemon & rosemary',
    ingredients: [
      { id: 'chicken-breast', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'butternut-squash', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'honey', quantity: 2, unit: 'tbsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 48,
    serves: 2
  },
  {
    // TODO: Change units of butternut squash.
    // TODO: Change units of herbs like coriander and parsley, not pcs.
    id: 'sage-roasted-squash',
    name: 'Sage roasted butternut squash & mushrooms with feta & tomatoes',
    ingredients: [
      { id: 'butternut-squash', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'chestnut-mushrooms', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'sage', quantity: 10, unit: 'tsp', type: 'fresh' },
      { id: 'feta', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'dijon-mustard', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'rocket', quantity: 100, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 72,
    serves: 4
  },
  {
    id: 'summer-roasted-courgettes',
    name: 'Summery roasted courgettes, aubergines and tomatoes with feta & pine nuts',
    ingredients: [
      { id: 'aubergines', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'courgettes', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'bell-pepper', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'bay-leaves', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'oregano', quantity: 1, unit: 'tsp', type: 'fresh' },
      { id: 'rosemary', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'feta', quantity: 120, unit: 'g', type: 'fresh' },
      { id: 'pine-nuts', quantity: 30, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 74,
    serves: 4
  },
  {
    // TODO: Fix units of squash, should be pcs?
    id: 'roasted-aubergine-squash-halloumi',
    name: 'Roasted aubergine with squash, halloumi, mint & bulgar wheat',
    ingredients: [
      { id: 'aubergines', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'butternut-squash', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'halloumi', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'mint', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'bulgar-wheat', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 1, unit: 'pcs', type: 'pantry' }
    ],
    book: 'yellow',
    page: 160,
    serves: 4
  },
  {
    // TODO: Write a tool or test that checks for variations in usage amounts across recipes.
    id: 'spelt-chorizo-sweet-potato',
    name: 'Spelt with chorizo, sweet potato, red onion & spinach',
    ingredients: [
      { id: 'pearl-barley', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'chicken-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'sweet-potato', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'chorizo', quantity: 225, unit: 'g', type: 'fresh' },
      { id: 'spinach', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 162,
    serves: 4
  },
  {
    // Reconcile all lamb based meats. Also beefs and porks as well. And chickens whilst you're at it.
    id: 'roast-lamb-apricots-pistachios',
    name: 'Roast lamb with apricots, pistachios, mint & pearl barley',
    ingredients: [
      { id: 'lamb-rump-steaks', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'ras-el-hanout', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'dried-apricots', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'red-onion', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'pearl-barley', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'chicken-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'pistachios', quantity: 30, unit: 'g', type: 'fresh' },
      { id: 'mint', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 158,
    serves: 4
  },
  {
    // TODO: A distribution of usage of products across recipes would be informative.
    // TODO: Should save the recipe in local storage until a new one is generated.
    // TODO: Even better, store all generated recipes.
    id: 'honey-roasted-carrots-parsnips',
    name: 'Honey roasted carrots & parsnips with quinoa and rocket',
    ingredients: [
      { id: 'carrots', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'parsnips', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'bay-leaves', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'honey', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'quinoa', quantity: 240, unit: 'g', type: 'fresh' },
      { id: 'rocket', quantity: 60, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 156,
    serves: 4
  },
  {
    // TODO: Oats is an outlier, handle it.
    id: 'cauliflower-brocolli-goats-cheese-crumble',
    name: 'Cauliflower & broccoli goats-cheese hazelnut crumble',
    ingredients: [
      { id: 'cauliflower', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'broccoli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'goats-cheese', quantity: 125, unit: 'g', type: 'fresh' },
      { id: 'hazelnuts', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'butter', quantity: 50, unit: 'g', type: 'pantry' },
      { id: 'creme-fraiche', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'oats', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'breadcrumbs', quantity: 40, unit: 'g', type: 'pantry' }
    ],
    book: 'yellow',
    page: 154,
    serves: 4
  },
  {
    // TODO: Search for 'corianer' and 'coriander' and fix.
    // TODO: Assert all grains and pasta are fresh, none in pantry. Only rice in pantry.
    id: 'tuna-mango-quinoa',
    name: 'Fresh tuna, spring onions, mango & coriander with quinoa',
    ingredients: [
      { id: 'quinoa', quantity: 120, unit: 'g', type: 'fresh' },
      { id: 'lime', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'spring-onions', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'tuna-steaks', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'mango', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'sesame-seeds', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'fish-sauce', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'soy-sauce', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'coriander', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 152,
    serves: 2
  },
  {
    id: 'bulgar-wheat-peppers-tomatos',
    name: 'Bulgar wheat with roasted red peppers, tomatoes, feta & pine nuts',
    ingredients: [
      { id: 'bell-pepper', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'feta', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'pinenuts', quantity: 40, unit: 'g', type: 'fresh' },
      { id: 'bulgar-wheat', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'basil', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 149,
    serves: 4
  },
  {
    id: 'roasted-mushrooms-artichokes-couscous',
    name: 'Roasted mushrooms with artichokes, basil & giant couscous',
    ingredients: [
      { id: 'chestnut-mushrooms', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'artichokes', quantity: 280, unit: 'g', type: 'fresh' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'couscous', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'greek-yogurt', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'basil', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 148,
    serves: 4
  },
  {
    // TODO: All products should be non-plural.
    // TODO: Have an 'allow swaps' feature for groupable items?
    // TODO: Reconcile watercress with rocket? Make groupable?
    // TODO: Reconcile giant couscous and couscous. Or all grains? Make groupable like pasta?
    id: 'salmon-pesto-giant-couscous',
    name: 'Salmon with pesto,giant couscous, watercress & lemon',
    ingredients: [
      { id: 'salmon-fillets', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'couscous', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'pinenuts', quantity: 20, unit: 'g', type: 'fresh' },
      { id: 'pesto', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'rocket', quantity: 100, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 146,
    serves: 2
  },
  {
    // TODO: Write a test that checks any ingredients that are like 95% of a product.
    id: 'goats-cheese-mushroom-pesto-traybake',
    name: 'Goats cheese, red peppers, mushroom & pesto traybake',
    ingredients: [
      { id: 'bell-pepper', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'chestnut-mushrooms', quantity: 500, unit: 'g', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli-flakes', quantity: 0.5, unit: 'tsp', type: 'pantry' },
      { id: 'pesto', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'pasta', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'chopped-tomatoes', quantity: 800, unit: 'g', type: 'fresh' },
      { id: 'parmesan', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'goats-cheese', quantity: 240, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 138,
    serves: 4
  },
  {
    // TODO: Reconcie the units on sausages.
    // TODO: Reconcile the units on oregano.
    id: 'fennel-sausage-conchiglie',
    name: 'Fennel, sausage & cannellini beans with tomatoes & conchiglie',
    ingredients: [
      { id: 'fennel', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'sausages', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'pasta', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'chopped-tomatoes', quantity: 800, unit: 'g', type: 'fresh' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'canellini-beans', quantity: 400, unit: 'g', type: 'fresh' },
      { id: 'parmesan', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'rosemary', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'oregano', quantity: 2, unit: 'tsp', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'brown-sugar', quantity: 1, unit: 'tbsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 137,
    serves: 4
  },
  {
    // Maybe reconcile pastas. Or maybe we introduce a groupable feature..?
    id: 'artichoke-rigatoni',
    name: 'Rigatoni al forno with pancetta, artichokes, creme fraiche & parmesan',
    ingredients: [
      { id: 'pancetta', quantity: 80, unit: 'g', type: 'fresh' },
      { id: 'artichokes', quantity: 280, unit: 'g', type: 'fresh' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'pasta', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'parmesan', quantity: 75, unit: 'g', type: 'fresh' },
      { id: 'creme-fraiche', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'parsley', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'breadcrumbs', quantity: 50, unit: 'g', type: 'pantry' }
    ],
    book: 'yellow',
    page: 136,
    serves: 2
  },
  {
    // TODO: Double check I've got units right on creme fraiche everywhere, should be g.
    id: 'baked-egg-pasta-florentine',
    name: 'Baked Egg Pasta Florentine',
    ingredients: [
      { id: 'spaghetti', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'spinach', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'creme-fraiche', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'chorizo', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'eggs', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 134,
    serves: 2
  },
  {
    id: 'crispy-baked-gnocchi',
    name: 'Crispy baked gnocchi with tomatoes, basil, mozarella & pinenuts',
    ingredients: [
      { id: 'gnocchi', quantity: 500, unit: 'g', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'mozzarella', quantity: 125, unit: 'g', type: 'fresh' },
      { id: 'basil', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'pinenuts', quantity: 40, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 132,
    serves: 2
  },
  {
    id: 'orzo-chilli-garlic-brocolli',
    name: 'Orzo with chilli & garlic roasted brocolli, lemon, parmesan & walnuts',
    ingredients: [
      { id: 'broccoli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli-flakes', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'orzo', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'walnuts', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'parmesan', quantity: 60, unit: 'g', type: 'fresh' },
      { id: 'spinach', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 130,
    serves: 4
  },
  {
    id: 'beetroot-risotto',
    name: 'Oven-cooked beetroot risotto',
    ingredients: [
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'risotto-rice', quantity: 300, unit: 'g', type: 'pantry' },
      { id: 'beetroot', quantity: 400, unit: 'g', type: 'fresh' },
      { id: 'white-wine', quantity: 100, unit: 'ml', type: 'fresh' },
      { id: 'vegetable-stock', quantity: 3, unit: 'pcs', type: 'pantry' },
      { id: 'goats-cheese', quantity: 120, unit: 'g', type: 'fresh' },
      { id: 'hazelnuts', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'rocket', quantity: 50, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 128,
    serves: 4
  },
  {
    // TODO: Maybe reconcile chilli powder and chilli flakes.
    id: 'spiced-roast-aubergines',
    name: 'Spiced roast aubergines & potatoes with coconut basmati rice, yoghurt & coriander',
    ingredients: [
      { id: 'aubergines', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'potatoes', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'coriander', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'cumin', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'chilli-powder', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'rice', quantity: 300, unit: 'g', type: 'pantry' },
      { id: 'coconut-milk', quantity: 400, unit: 'ml', type: 'fresh' },
      { id: 'greek-yogurt', quantity: 200, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 126,
    serves: 4
  },
  {
    id: 'five-spiced-duck',
    name: 'Five spiced duck with wild rice, kale, and ginger',
    ingredients: [
      { id: 'rice', quantity: 200, unit: 'g', type: 'pantry' },
      { id: 'ginger', quantity: 5, unit: 'cm', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'star-anise', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'kale', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'duck-breasts', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'spring-onions', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'five-spice', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 124,
    serves: 2
  },
  {
    // TODO: Reconcile different rices, red rice here.
    // TODO: Reconile different types of minces.
    id: 'sesame-ginger-meatballs',
    name: 'Sesame & ginger meatballs with pak choi, chilli & red rice',
    ingredients: [
      { id: 'rice', quantity: 200, unit: 'g', type: 'pantry' },
      { id: 'pork-mince', quantity: 500, unit: 'g', type: 'fresh' },
      { id: 'spring-onions', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 7.5, unit: 'cm', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'sesame-seeds', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'pak-choi', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'lime', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 122,
    serves: 4
  },
  {
    id: 'avocado-chicken-salad',
    name: 'Avocado & chicken salad with pomegranates & brown rice',
    // TODO: Replace brown rice with just rice, reconcile all rices.
    ingredients: [
      { id: 'rice', quantity: 300, unit: 'g', type: 'pantry' },
      { id: 'avocados', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chicken-breast', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli-flakes', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'lime', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'mint', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'pomegranates', quantity: 2, unit: 'tbsp', type: 'fresh' },
      { id: 'spinach', quantity: 200, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 116,
    serves: 2
  },
  {
    // TODO: Need a feature that allows me to specify a sea bass recipe and finds recipes that
    // use all the other ingredients, so they don't all need to use sea bass.
    // Will the algorithm do that by default? Maybe...
    // TODO: Change spring-onions to spring-onion.
    id: 'seabass-asparagus-spring-onions',
    name: 'Seabass, asparagus & spring onions with jasmine rice & a ginger, lime & soy dressing',
    ingredients: [
      { id: 'rice', quantity: 200, unit: 'g', type: 'pantry' },
      { id: 'asparagus', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'pak-choi', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'sea-bass-fillets', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 4, unit: 'cm', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'spring-onions', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'lime', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'fish-sauce', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'soy-sauce', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'coriander', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 113,
    serves: 2
  },
  {
    id: 'miso-roast-salmon',
    name: 'Miso roast salmon with mushrooms, pak choi & jasmine rice',
    ingredients: [
      { id: 'rice', quantity: 200, unit: 'g', type: 'pantry' },
      { id: 'salmon-fillets', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chestnut-mushrooms', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'pak-choi', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 5, unit: 'cm', type: 'fresh' },
      { id: 'miso-paste', quantity: 30, unit: 'g', type: 'pantry' },
      // TODO: Reconcile different vinegars.
      { id: 'white-wine-vinegar', quantity: 1, unit: 'tbsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 112,
    serves: 2
  },
  {
    id: 'tarragon-roast-chicken',
    name: 'Tarragon roast chicken with potatoes & garlic',
    ingredients: [
      { id: 'potatoes', quantity: 10, unit: 'pcs', type: 'fresh' },
      { id: 'tarragon', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 12, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'whole-chicken', quantity: 2.3, unit: 'kg', type: 'fresh' },
      { id: 'butter', quantity: 30, unit: 'g', type: 'pantry' }
    ],
    book: 'yellow',
    page: 104,
    serves: 6
  },
  {
    // TODO: Add a replacements features that lets you swap all X for Y.
    // TODO: Add a "here are the ingredients I have" mode.
    // TODO: Make it work on mobile.
    id: 'slow-cooked-leg-of-lamb',
    name: 'Slow cooked leg of lamb with harissa, roasted aubergines & tomatoes',
    ingredients: [
      { id: 'aubergines', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'lamb-rump-steaks', quantity: 8, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 12, unit: 'pcs', type: 'fresh' },
      { id: 'harissa', quantity: 4, unit: 'tbsp', type: 'pantry' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'greek-yogurt', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'mint', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 102,
    serves: 8
  },
  {
    id: 'filipino-style-garlic-pork-pot-roast',
    name: 'Filipino style garlic pork pot roast',
    ingredients: [
      { id: 'pork-shoulder', quantity: 1.5, unit: 'kg', type: 'fresh' },
      { id: 'garlic', quantity: 12, unit: 'pcs', type: 'fresh' },
      { id: 'bay-leaves', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'chicken-stock', quantity: 2, unit: 'pcs', type: 'pantry' },
      { id: 'soy-sauce', quantity: 2, unit: 'tbsp', type: 'pantry' },
      { id: 'white-wine-vinegar', quantity: 3, unit: 'tbsp', type: 'pantry' },
      { id: 'rice', quantity: 350, unit: 'g', type: 'pantry' },
      { id: 'pak-choi', quantity: 6, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 101,
    serves: 6
  },
  {
    id: 'slow-cooked-brisket',
    name: 'Slow cooked brisket with chimichurri',
    ingredients: [
      { id: 'chilli-flakes', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'oregano', quantity: 3, unit: 'tsp', type: 'pantry' },
      { id: 'brisket', quantity: 1, unit: 'kg', type: 'fresh' },
      { id: 'butternut-squash', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'chicken-stock', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'white-wine-vinegar', quantity: 6, unit: 'tbsp', type: 'pantry' },
      { id: 'parsley', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 100,
    serves: 4
  },
  {
    id: 'lemon-rosemary-steak',
    name: 'Lemon and rosemary steak with garlic roasted potatoes & onions',
    ingredients: [
      { id: 'potatoes', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'steaks', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 96,
    serves: 2
  },
  {
    id: 'smoky-sausage-sweet-potato-red-onion',
    name: 'Smoky sausage, sweet potato & red onion traybake',
    ingredients: [
      { id: 'sausages', quantity: 12, unit: 'pcs', type: 'fresh' },
      { id: 'sweet-potato', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'paprika', quantity: 4, unit: 'tsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 94,
    serves: 4
  },
  {
    id: 'five-spiced-pork-chops',
    name: 'Five-spice pork chops with roasted sweet potatoes, ginger & garlic',
    ingredients: [
      { id: 'sweet-potato', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 5, unit: 'cm', type: 'fresh' },
      { id: 'star-anise', quantity: 1, unit: 'pcs', type: 'pantry' },
      { id: 'pork-steaks', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'five-spice', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'spring-onions', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'soy-sauce', quantity: 1, unit: 'tbsp', type: 'pantry' }
    ],
    book: 'yellow',
    page: 92,
    serves: 2
  },
  {
    id: 'chargrilled-chicken-flatbreads',
    name: 'Chargrilled chicken on flatbreads with pinenuts, raisins & goats cheese',
    ingredients: [
      { id: 'chicken-breast', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'cumin', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'raisins', quantity: 50, unit: 'g', type: 'pantry' },
      { id: 'pinenuts', quantity: 35, unit: 'g', type: 'fresh' },
      { id: 'tortillas', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'greek-yogurt', quantity: 80, unit: 'g', type: 'fresh' },
      { id: 'spinach', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'goats-cheese', quantity: 75, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 88,
    serves: 2
  },
  {
    // TODO: Use ChatGPT to assess duplicates in product list.
    id: 'flash-grilled-spiced-steak',
    name: 'Flash grilled spiced steak with peppers, chillies & onions',
    ingredients: [
      { id: 'steaks', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'bell-pepper', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'paprika', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'cumin', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'coriander', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'tortillas', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'creme-fraiche', quantity: 150, unit: 'g', type: 'fresh' },
      { id: 'lime', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'parmesan', quantity: 30, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 86,
    serves: 2
  },
  {
    id: 'oven-baked-asparagus-tortilla',
    name: 'Oven baked asparagus & parmesan tortilla',
    ingredients: [
      { id: 'potatoes', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'sweet-potato', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'tarragon', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'eggs', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'creme-fraiche', quantity: 50, unit: 'g', type: 'fresh' },
      { id: 'asparagus', quantity: 230, unit: 'g', type: 'fresh' },
      { id: 'parmesan', quantity: 30, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 76,
    serves: 4
  },
  {
    id: 'spiced-roast-cauliflower',
    name: 'Spiced roast cauliflower, sweet potato & okra with yoghurt & almonds',
    ingredients: [
      { id: 'cauliflower', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'sweet-potato', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'ginger', quantity: 5, unit: 'cm', type: 'fresh' },
      { id: 'paprika', quantity: 4, unit: 'tsp', type: 'pantry' },
      { id: 'cumin', quantity: 4, unit: 'tsp', type: 'pantry' },
      { id: 'okra', quantity: 350, unit: 'g', type: 'fresh' },
      { id: 'greek-yogurt', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'flaked-almonds', quantity: 80, unit: 'g', type: 'pantry' },
      { id: 'red-onion', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'coriander', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 70,
    serves: 4
  },
  {
    id: 'roasted-aubergines-mozzarella',
    name: 'Roasted aubergines with mozzarella, chilli, lemon & flat leaf parsley',
    ingredients: [
      { id: 'aubergines', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'parsley', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'mozzarella', quantity: 250, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 68,
    serves: 4
  },
  {
    id: 'french-tomato-mustard-tart',
    name: 'French tomato & mustard tart with tarragon',
    ingredients: [
      { id: 'puff-pastry', quantity: 320, unit: 'g', type: 'fresh' },
      { id: 'dijon-mustard', quantity: 2.5, unit: 'tbsp', type: 'pantry' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'tarragon', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 66,
    serves: 4
  },
  {
    id: 'beetroot-dill-blue-cheese-tart',
    name: 'Beetroot, dill & blue cheese tart with capers & walnuts',
    ingredients: [
      { id: 'beetroot', quantity: 200, unit: 'g', type: 'fresh' },
      { id: 'white-wine-vinegar', quantity: 0.5, unit: 'tbsp', type: 'pantry' },
      { id: 'puff-pastry', quantity: 320, unit: 'g', type: 'fresh' },
      { id: 'blue-cheese', quantity: 75, unit: 'g', type: 'fresh' },
      { id: 'capers', quantity: 20, unit: 'g', type: 'fresh' },
      { id: 'dill', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'walnuts', quantity: 50, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 64,
    serves: 6
  },
  {
    id: 'chicken-chorizo-chickpeas-tomatoes',
    name: 'Chicken with chorizo, chickpeas & tomatoes',
    ingredients: [
      { id: 'onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'chorizo', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'chickpeas', quantity: 400, unit: 'g', type: 'fresh' },
      { id: 'chopped-tomatoes', quantity: 400, unit: 'g', type: 'fresh' },
      { id: 'chicken-breast', quantity: 7, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 53,
    serves: 4
  },
  {
    id: 'oven-roasted-coq-au-vin',
    name: 'Oven roasted coq au vin',
    ingredients: [
      { id: 'chicken-breast', quantity: 7, unit: 'pcs', type: 'fresh' },
      { id: 'pancetta', quantity: 160, unit: 'g', type: 'fresh' },
      { id: 'chestnut-mushrooms', quantity: 250, unit: 'g', type: 'fresh' },
      { id: 'garlic', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'shallots', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'bay-leaves', quantity: 3, unit: 'pcs', type: 'fresh' },
      { id: 'rosemary', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'butter', quantity: 30, unit: 'g', type: 'fresh' },
      { id: 'red-wine', quantity: 200, unit: 'ml', type: 'fresh' }
    ],
    book: 'yellow',
    page: 52,
    serves: 4
  },
  {
    id: 'spicy-chipotle-chicken-wings',
    name: 'Spicy chipotle chicken wings with sweet potato wedges, coriander & lime yoghurt',
    ingredients: [
      { id: 'chicken-breast', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'sweet-potato', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'chilli-flakes', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'paprika', quantity: 1, unit: 'tsp', type: 'pantry' },
      { id: 'brown-sugar', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'lime', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'greek-yogurt', quantity: 100, unit: 'g', type: 'fresh' },
      { id: 'coriander', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 50,
    serves: 4
  },
  {
    id: 'sardines-paprika-roasted-peppers',
    name: 'Sardines with paprika roasted peppers, tomatoes, chillies & almonds',
    ingredients: [
      { id: 'bell-pepper', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'cherry-tomatoes', quantity: 300, unit: 'g', type: 'fresh' },
      { id: 'chilli', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'paprika', quantity: 2, unit: 'tsp', type: 'pantry' },
      { id: 'lemon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'flaked-almonds', quantity: 50, unit: 'g', type: 'pantry' },
      { id: 'sardines', quantity: 8, unit: 'pcs', type: 'fresh' },
      { id: 'basil', quantity: 1, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 34,
    serves: 4
  },
  {
    id: 'mackeral-rhubarb',
    name: 'Mackeral and rhubarb',
    ingredients: [
      { id: 'rhubarb', quantity: 650, unit: 'g', type: 'fresh' },
      { id: 'shallots', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'white-wine-vinegar', quantity: 1.5, unit: 'tbsp', type: 'pantry' },
      { id: 'brown-sugar', quantity: 1, unit: 'tbsp', type: 'pantry' },
      { id: 'mackeral-fillets', quantity: 6, unit: 'pcs', type: 'fresh' },
      { id: 'hazelnuts', quantity: 30, unit: 'g', type: 'fresh' },
      { id: 'cucumber', quantity: 0.5, unit: 'pcs', type: 'fresh' },
      { id: 'dill', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'creme-fraiche', quantity: 90, unit: 'g', type: 'fresh' }
    ],
    book: 'yellow',
    page: 32,
    serves: 6
  },
  {
    id: 'herb-stuffed-trout',
    name: 'Herb stuffed trout with roast sweet potatoes & onions',
    ingredients: [
      { id: 'sweet-potato', quantity: 5, unit: 'pcs', type: 'fresh' },
      { id: 'red-onion', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'tarragon', quantity: 1, unit: 'pcs', type: 'fresh' },
      { id: 'oregano', quantity: 1, unit: 'tsp', type: 'fresh' },
      { id: 'trout', quantity: 2, unit: 'pcs', type: 'fresh' },
      { id: 'garlic', quantity: 4, unit: 'pcs', type: 'fresh' },
      { id: 'lemon', quantity: 0.5, unit: 'pcs', type: 'fresh' }
    ],
    book: 'yellow',
    page: 28,
    serves: 2
  }
];

// Super Pantry
export const SUPER_PANTRY: Product[] = [
  { id: 'olive-oil', price: 7.8, quantity: 1, unit: 'l', shop: 'tesco', container: 'bottle' },
  { id: 'salt', price: 2.5, quantity: 225, unit: 'g', shop: 'coop', container: 'box' },
  { id: 'pepper', price: 2.75, quantity: 100, unit: 'g', shop: 'tesco', container: 'box' }
];

// Pantry
export const PANTRY: Product[] = [
  // Herbs
  { id: 'mint', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },

  { id: 'thyme', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'rosemary', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'tarragon', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'oregano', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'dill', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'coriander', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'paprika', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'basil', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'parsley', price: 0.5, quantity: 4, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'star-anise', price: 1, quantity: 5, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'chilli-flakes', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'sage', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'cumin', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'chilli-powder', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'five-spice', price: 1, quantity: 10, unit: 'tsp', shop: 'tesco', container: 'jar' },
  { id: 'bay-leaves', price: 1, quantity: 10, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'mayonnaise', price: 3, quantity: 42, unit: 'tbsp', shop: 'coop', container: 'jar' },
  { id: 'dijon-mustard', price: 3.1, quantity: 15, unit: 'tbsp', shop: 'coop', container: 'jar' },
  { id: 'honey', price: 2.1, quantity: 20, unit: 'tbsp', shop: 'coop', container: 'jar' },

  // Stocks, Pastes, and Sauces
  { id: 'vegetable-stock', price: 2.1, quantity: 4, unit: 'pcs', shop: 'coop', container: 'box' },
  { id: 'chicken-stock', price: 2.1, quantity: 4, unit: 'pcs', shop: 'coop', container: 'box' },
  { id: 'ras-el-hanout', price: 2.45, quantity: 5, unit: 'tsp', shop: 'sainsburys', container: 'jar' },
  { id: 'olive-tapenade', price: 3.25, quantity: 30, unit: 'tsp', shop: 'coop', container: 'jar' },
  { id: 'fish-sauce', price: 1, quantity: 20, unit: 'tbsp', shop: 'coop', container: 'bottle' },
  { id: 'soy-sauce', price: 3.55, quantity: 10, unit: 'tbsp', shop: 'coop', container: 'bottle' },
  { id: 'miso-paste', price: 1.75, quantity: 100, unit: 'g', shop: 'tesco', container: 'jar' },
  { id: 'white-wine-vinegar', price: 2.35, quantity: 25, unit: 'tbsp', shop: 'coop', container: 'bottle' },

  // Baking
  { id: 'flaked-almonds', price: 2.5, quantity: 150, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'raisins', price: 2.45, quantity: 500, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'brown-sugar', price: 2.65, quantity: 42, unit: 'tbsp', shop: 'coop', container: 'bag' },

  // Cupboard
  { id: 'rice', price: 2.8, quantity: 1000, unit: 'g', shop: 'tesco', container: 'bag' }
];

// TODO: Test that checks for outlier prices, nothing about £10 for example.
// TODO: Test that ensures all units are consistent, the units defined in products are source of truth.
// TODO: Write some validation tests that check all products exist for all recipes!
// TODO: Check the units are the same between them. (Add units to the products.)
// TODO: Allow substitutions for products.
export const PRODUCTS: Product[] = [
  { id: 'garlic', price: 0.72, quantity: 12, unit: 'pcs', shop: 'coop', container: 'head' },
  { id: 'brussels-sprouts', price: 1.6, quantity: 500, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'pancetta', price: 1.9, quantity: 130, unit: 'g', shop: 'tesco', container: 'pack' },
  { id: 'feta', price: 2.65, quantity: 200, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'sweetcorn', price: 1.75, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'spring-onions', price: 0.75, quantity: 10, unit: 'pcs', shop: 'coop', container: 'bunch' },
  { id: 'chestnut-mushrooms', price: 1.1, quantity: 150, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'shallots', price: 1.2, quantity: 10, unit: 'pcs', shop: 'coop', container: 'bag' },
  { id: 'halloumi', price: 2.95, quantity: 200, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'pink-peppercorns', price: 2, quantity: 5, unit: 'tsp', shop: 'sainsburys', container: 'jar' },
  { id: 'cod', price: 5, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'cherry-tomatoes', price: 1.35, quantity: 300, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'broccoli', price: 0.85, quantity: 1, unit: 'pcs', shop: 'coop', container: 'head' },
  { id: 'chicken-breast', price: 2.75, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'fennel', price: 2.2, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'bell-pepper', price: 0.7, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'butternut-squash', price: 1.8, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'aubergines', price: 1, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'courgettes', price: 1.25, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'sweet-potato', price: 1.7, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'chorizo', price: 3.7, quantity: 225, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'spinach', price: 1.4, quantity: 100, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'lamb-rump-steaks', price: 5, quantity: 3, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'carrots', price: 0.5, quantity: 12, unit: 'pcs', shop: 'coop', container: 'bag' },
  { id: 'parsnips', price: 0.8, quantity: 4, unit: 'pcs', shop: 'coop', container: 'bag' },
  { id: 'rocket', price: 1.2, quantity: 60, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'cauliflower', price: 1.1, quantity: 1, unit: 'pcs', shop: 'coop', container: 'head' },
  { id: 'goats-cheese', price: 2.6, quantity: 125, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'hazelnuts', price: 2.55, quantity: 100, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'butter', price: 2.1, quantity: 250, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'quinoa', price: 2.8, quantity: 300, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'tuna-steaks', price: 1.2, quantity: 1, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'mango', price: 1.3, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'pinenuts', price: 4.55, quantity: 100, unit: 'g', shop: 'coop', container: 'packet' },
  { id: 'greek-yogurt', price: 1.25, quantity: 500, unit: 'g', shop: 'coop', container: 'pot' },
  { id: 'artichokes', price: 3.75, quantity: 280, unit: 'g', shop: 'coop', container: 'jar' },
  { id: 'onion', price: 1.1, quantity: 3, unit: 'pcs', shop: 'coop', container: 'bag' },
  { id: 'pesto', price: 3.7, quantity: 190, unit: 'g', shop: 'coop', container: 'jar' },
  { id: 'chopped-tomatoes', price: 0.8, quantity: 400, unit: 'g', shop: 'coop', container: 'can' },
  { id: 'parmesan', price: 3.2, quantity: 200, unit: 'g', shop: 'tesco', container: 'pack' },
  { id: 'sausages', price: 2.5, quantity: 8, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'canellini-beans', price: 0.85, quantity: 400, unit: 'g', shop: 'coop', container: 'can' },
  { id: 'creme-fraiche', price: 1.6, quantity: 200, unit: 'g', shop: 'coop', container: 'pot' },
  { id: 'spaghetti', price: 0.9, quantity: 500, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'eggs', price: 1.96, quantity: 6, unit: 'pcs', shop: 'coop', container: 'carton' },
  { id: 'gnocchi', price: 2.25, quantity: 400, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'mozzarella', price: 225, quantity: 225, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'orzo', price: 1.7, quantity: 500, unit: 'g', shop: 'tesco', container: 'pack' },
  { id: 'walnuts', price: 2.7, quantity: 150, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'risotto-rice', price: 3, quantity: 500, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'beetroot', price: 0.7, quantity: 250, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'white-wine', price: 6, quantity: 750, unit: 'ml', shop: 'coop', container: 'bottle' },
  { id: 'potatoes', price: 1.35, quantity: 30, unit: 'pcs', shop: 'coop', container: 'bag' },
  { id: 'coconut-milk', price: 1.15, quantity: 400, unit: 'ml', shop: 'coop', container: 'can' },
  { id: 'ginger', price: 0.9, quantity: 15, unit: 'cm', shop: 'coop', container: 'loose' },
  { id: 'kale', price: 1, quantity: 160, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'duck-breasts', price: 5, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'pork-mince', price: 2.6, quantity: 500, unit: 'g', shop: 'tesco', container: 'pack' },
  { id: 'pak-choi', price: 1.45, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'avocados', price: 1.95, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'pomegranates', price: 1.3, quantity: 10, unit: 'tbsp', shop: 'coop', container: 'jar' },
  { id: 'asparagus', price: 2, quantity: 100, unit: 'g', shop: 'coop', container: 'bundle' },
  { id: 'sea-bass-fillets', price: 5, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'salmon-fillets', price: 4.75, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'lemon', price: 0.5, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'red-onion', price: 1.15, quantity: 3, unit: 'pcs', shop: 'coop', container: 'net' },
  { id: 'harissa', price: 3, quantity: 12, unit: 'tbsp', shop: 'coop', container: 'jar' },
  { id: 'couscous', price: 1.35, quantity: 500, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'pork-shoulder', price: 9, quantity: 1.8, unit: 'kg', shop: 'tesco', container: 'pack' },
  { id: 'brisket', price: 8.8, quantity: 1, unit: 'kg', shop: 'tesco', container: 'pack' },
  { id: 'pork-steaks', price: 5, quantity: 4, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'steaks', price: 3.84, quantity: 2, unit: 'pcs', shop: 'tesco', container: 'pack' },
  { id: 'chilli', price: 0.64, quantity: 3, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'tortillas', price: 1.65, quantity: 8, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'okra', price: 1.6, quantity: 175, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'puff-pastry', price: 1.75, quantity: 375, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'capers', price: 2.2, quantity: 190, unit: 'g', shop: 'coop', container: 'jar' },
  { id: 'chickpeas', price: 0.85, quantity: 400, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'red-wine', price: 6, quantity: 750, unit: 'ml', shop: 'coop', container: 'bottle' },
  { id: 'mackeral-fillets', price: 4.2, quantity: 2, unit: 'pcs', shop: 'coop', container: 'pack' },
  { id: 'lime', price: 0.4, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'sardines', price: 0.7, quantity: 8, unit: 'pcs', shop: 'coop', container: 'tin' },
  { id: 'rhubarb', price: 2.5, quantity: 400, unit: 'g', shop: 'sainsburys', container: 'pack' },
  { id: 'cucumber', price: 0.9, quantity: 1, unit: 'pcs', shop: 'coop', container: 'loose' },
  { id: 'trout', price: 7.5, quantity: 2, unit: 'pcs', shop: 'sainsburys', container: 'pack' },
  { id: 'sunflower-seeds', price: 1.35, quantity: 100, unit: 'g', shop: 'coop', container: 'packet' },
  { id: 'pine-nuts', price: 4.55, quantity: 100, unit: 'g', shop: 'coop', container: 'packet' },
  { id: 'breadcrumbs', price: 1.35, quantity: 175, unit: 'g', shop: 'coop', container: 'pack' },
  { id: 'peanuts', price: 2.1, quantity: 275, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'bulgar-wheat', price: 1.9, quantity: 500, unit: 'g', shop: 'tesco', container: 'bag' },
  { id: 'pearl-barley', price: 1, quantity: 500, unit: 'g', shop: 'tesco', container: 'bag' },
  { id: 'dried-apricots', price: 2, quantity: 240, unit: 'g', shop: 'tesco', container: 'bag' },
  { id: 'pistachios', price: 2.35, quantity: 150, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'oats', price: 0.95, quantity: 500, unit: 'g', shop: 'coop', container: 'bag' },
  { id: 'sesame-seeds', price: 1.25, quantity: 12, unit: 'tbsp', shop: 'coop', container: 'bag' },
  { id: 'whole-chicken', price: 3.76, quantity: 1.5, unit: 'kg', shop: 'tesco', container: 'loose' }
];
