class RecipesAdapter {
    constructor() {
      this.baseURL = "http://localhost:3000/recipes"
    }

    getRecipes() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
    }