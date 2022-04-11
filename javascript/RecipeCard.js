class RecipeCard {
  constructor(recipe) {
    this._recipe = recipe;
  }

  createRecipeCard() {
    const items = [];
    const article = document.createElement("article");
    article.classList.add("recipe__card");

    const recipeCard = `
          <div class="recipe__image"></div>
          <div class="recipe__content">
            <div class="recipe__content-header">
              <h2>${this._recipe.name}</h2>
              <div class="recipe__content-header-timing">
                <img
                  class="header__logo"
                  src="assets/clock-icon.svg"
                  alt="Icon horloge"
                />
                <span>${this._recipe.time} min</span>
              </div>
            </div>

            <div class="recipe__content-body">
              <ul class="recipe__content-body-ingredients" id="ingredients-list">

              </ul>
              <p>${this._recipe.description}</p>
            </div>
          </div>
        `;

    article.innerHTML = recipeCard;

    let ingredientsList = article.querySelector("#ingredients-list");
    let listItem;

    this._recipe.ingredients.forEach((ingredient) => {
      if (ingredient.unit) {
        listItem = `
        <li>
          <span>${ingredient.ingredient}:</span>
          <span>${ingredient.quantity} ${ingredient.unit}</span>
        </li>`;
      } else {
        listItem = `
        <li>
          <span>${ingredient.ingredient}:</span>
          <span>${ingredient.quantity}</span>
        </li>`;
      }
      items.push(listItem);
    });

    ingredientsList.innerHTML = items;
    return article;
  }
}
