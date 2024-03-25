import { Recipe, Product, PRODUCTS, RECIPES } from './data';

const PRODUCTS_MAP: Record<string, Product> = {};
PRODUCTS.forEach((product) => {
  PRODUCTS_MAP[product.id] = product;
});

export type RequiredProduct = Product & { totalQuantity: number; purchaseQuantity: number; utilisation: number };

export type MealPlan = {
  recipes: Recipe[];
  productList: RequiredProduct[];
};

function makeInstance(): number[] {
  const instance = [];
  for (let i = 0; i < 4; i++) {
    instance.push(Math.floor(Math.random() * RECIPES.length));
  }
  return instance;
}

function evaluateInstance(instance: number[], requiredRecipe: number): number {
  const usedProducts: Record<string, number> = {};

  // // Compute product usage from this set of recipes.
  instance.forEach((recipeIndex) => {
    const recipe = RECIPES[recipeIndex];
    recipe.ingredients.forEach((ingredient) => {
      usedProducts[ingredient.id] = usedProducts[ingredient.id] || 0;
      usedProducts[ingredient.id] += ingredient.quantity;
    });
  });

  // Compute the score:
  // 1. Penalise unused products, 1 point for 25% unused, 2 points for 50%, 3 points for 75%.
  // 2. Using several items of the same product is fine, but still penalise any unused products.
  // 3. Penalise not using the required recipe.
  // 4. Penalise using the same recipe multiple times.

  let score = 0;
  score = 1;
  for (const key in usedProducts) {
    // If key is not in products, ignore.
    if (!PRODUCTS_MAP[key]) {
      continue;
    }

    // Penalise unused products.
    const amountPerPack = PRODUCTS_MAP[key].quantity;
    const used = usedProducts[key];
    const unused = amountPerPack - (used % amountPerPack);
    const percentageUnused = unused / amountPerPack;

    if (percentageUnused >= 0.75) {
      score += 3;
    } else if (percentageUnused >= 0.5) {
      score += 2;
    } else if (percentageUnused >= 0.25) {
      score += 1;
    }

    // Penalise not using the required recipe.
    if (instance.indexOf(requiredRecipe) === -1) {
      score += 10;
    }

    // Penalise using the same recipe multiple times.
    const uniqueRecipes = new Set(instance);
    if (uniqueRecipes.size < instance.length) {
      score += 10;
    }
  }

  return score;
}

function geneticAlgorithm(recipes: Recipe[], requiredRecipe: number): Recipe[] {
  let population: number[][] = [];
  const populationSize = 64;
  const rounds = 200;
  for (let i = 0; i < populationSize; i++) {
    population.push(makeInstance());
  }

  function nextGeneration(population: number[][]): number[][] {
    const scores = population.map((instance) => evaluateInstance(instance, requiredRecipe));
    const scorePopulationPairs = population.map((instance, index) => ({ instance, score: scores[index] }));
    scorePopulationPairs.sort((a, b) => a.score - b.score);
    const bestHalf = scorePopulationPairs.slice(0, populationSize / 2);

    // Generate next generation, crossover once at random point.
    const nextGeneration = [];
    for (let i = 0; i < populationSize; i++) {
      const parentA = bestHalf[Math.floor(Math.random() * bestHalf.length)].instance;
      const parentB = bestHalf[Math.floor(Math.random() * bestHalf.length)].instance;
      const crossoverPoint = Math.floor(Math.random() * Math.min(parentA.length, parentB.length));
      const child = [...parentA.slice(0, crossoverPoint), ...parentB.slice(crossoverPoint)];

      nextGeneration.push(child);
    }

    return nextGeneration;
  }

  for (let i = 0; i < rounds; i++) {
    population = nextGeneration(population);
  }

  // Return best instance.
  const scores = population.map((instance) => evaluateInstance(instance, requiredRecipe));
  const scorePopulationPairs = population.map((instance, index) => ({ instance, score: scores[index] }));
  scorePopulationPairs.sort((a, b) => a.score - b.score);
  const bestInstance = scorePopulationPairs[0].instance;
  return bestInstance.map((index) => recipes[index]);
}

// Given a list of recipes and a list of products, build a meal plan
// that optimises that minimises waste.
const buildMealPlan = async (startRecipe: Recipe): Promise<MealPlan> => {
  const requiredRecipe = RECIPES.indexOf(startRecipe);
  const recipeList = geneticAlgorithm(RECIPES, requiredRecipe);

  console.log(recipeList);

  // Compute product usage from this set of recipes.
  const usedProducts: RequiredProduct[] = [];
  recipeList.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const product = PRODUCTS_MAP[ingredient.id];
      if (!product) return;

      const usedProduct = usedProducts.find((usedProduct) => usedProduct.id === product.id);
      if (usedProduct) {
        usedProduct.totalQuantity += ingredient.quantity;
      } else {
        usedProducts.push({ ...product, totalQuantity: ingredient.quantity, purchaseQuantity: 0, utilisation: 0 });
      }
    });
  });

  console.log(usedProducts);

  // Iterate through usedProducts and compute purchaseQuantity and utilisation.
  usedProducts.forEach((product) => {
    const amountPerPack = product.quantity;
    const used = product.totalQuantity;
    const itemsNeeded = Math.ceil(used / amountPerPack);
    const utilisation = (used / (itemsNeeded * product.quantity)) * 100;
    product.purchaseQuantity = itemsNeeded;
    product.utilisation = utilisation;
  });

  // Compute a single score for weight average utilisation.
  const totalWeight = usedProducts.reduce((acc, product) => acc + product.totalQuantity, 0);
  const score = usedProducts.reduce(
    (acc, product) => acc + (product.totalQuantity / totalWeight) * product.utilisation,
    0
  );
  console.log('Score:', score);

  // // Pause for a second to simulate a slow algorithm.
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return { recipes: recipeList, productList: usedProducts };
};

export default buildMealPlan;
