import { PRODUCTS, RECIPES, PANTRY } from './data';

describe('integrity', () => {
  test('all products and pantry items are in hypenated lower case', () => {
    const allItems = [...PRODUCTS, ...PANTRY];

    allItems.forEach((item) => {
      expect(item.id).toEqual(item.id.toLowerCase());
      expect(item.id).toEqual(item.id.replace(/ /g, '-'));
    });
  });

  test('no duplicate items in both products and pantry', () => {
    const allItems = [...PRODUCTS, ...PANTRY];
    const allItemsSet = new Set(allItems);
    expect(allItems.length).toEqual(allItemsSet.size);
  });

  test('no plural duplicates in products', () => {
    // For all products, ensure that if X is in the name, Xs is not or vice versa.
    PRODUCTS.forEach((product) => {
      const name = product.id;
      let duplicate = null;
      if (name.endsWith('s')) {
        duplicate = PRODUCTS.find((p) => p.id === name.slice(0, -1));
      } else {
        duplicate = PRODUCTS.find((p) => p.id === `${name}s`);
      }
      if (duplicate) {
        throw new Error(`Duplicate found: ${product.id} and ${duplicate.id}`);
      }
    });
  });

  test('no herbs in products', () => {
    const HERBS = ['basil', 'oregano', 'parsley', 'rosemary', 'sage', 'thyme', 'cilantro', 'dill', 'mint', 'tarragon'];
    PRODUCTS.forEach((product) => {
      expect(HERBS).not.toContain(product.id);
    });
  });

  test('all ingredients in recipes exist in products or pantry', () => {
    const allItems = [...PRODUCTS, ...PANTRY].map((item) => item.id);

    RECIPES.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        expect(allItems).toContain(ingredient.id);
      });
    });
  });

  test('no unused products', () => {
    const allItems = [...PRODUCTS, ...PANTRY].map((item) => item.id);

    RECIPES.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        const index = allItems.indexOf(ingredient.id);
        allItems.splice(index, 1);
      });
    });

    expect(allItems).toEqual([]);
  });

  test('no duplicate recipes by page number', () => {
    const pageNumbers = new Set();
    RECIPES.forEach((recipe) => {
      expect(pageNumbers).not.toContain(recipe.page);
      pageNumbers.add(recipe.page);
    });
  });

  test('units for ingredients are consistent with pantry/products', () => {
    RECIPES.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        const pantryItem = PANTRY.find((item) => item.id === ingredient.id);
        const productItem = PRODUCTS.find((item) => item.id === ingredient.id);
        if (pantryItem) {
          expect(`${ingredient.id}:${ingredient.unit}`).toEqual(`${pantryItem.id}:${pantryItem.unit}`);
        } else if (productItem) {
          expect(`${ingredient.id}:${ingredient.unit}`).toEqual(`${productItem.id}:${productItem.unit}`);
        }
      });
    });
  });
});
