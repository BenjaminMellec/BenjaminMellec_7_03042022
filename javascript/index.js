import recipes from "../javascript/data/recipes.js";

class Index {
  constructor() {
    this.recipesList = document.querySelector("#recipes");
    this.recipes = recipes;
  }

  async main() {
    const recipesData = await this.recipes;
    recipesData
      .map((recipe) => new RecipeData(recipe))
      .forEach((recipe) => {
        const recipeItem = document.createElement("li");
        recipeItem.classList.add("recipe");

        const Template = new RecipeCard(recipe);
        recipeItem.appendChild(Template.createRecipeCard());
        this.recipesList.appendChild(recipeItem);
      });
  }
}

const index = new Index();
index.main();
