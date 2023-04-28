const API_KEY = "5b77d482d8984e1fb0339d6522070908"
const recipeListEl = document.getElementById('recipe-list')
const recipeTitleEl = document.getElementsByClassName('title')



function displayRecipes(recipes){
    recipeListEl.innerHTML="" ;
    
    recipes.forEach((recipe) =>{
        const recipeItemEl =document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl =document.createElement("img");
        recipeImageEl.src =recipe.image;
        recipeImageEl.alt ="recipe image" ;
        
        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML =recipe.title;

        recipeIngredientsEl =document.createElement("p");
        recipeIngredientsEl.innerHTML=`<strong>Ingredients:</strong>
        ${recipe.extendedIngredients.map((ingredient) =>ingredient.original).join(",")}` ;

        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href =recipe.sourceUrl;
        recipeLink.innerHTML ="View Recipe" ;

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async  function getRecipes(){
    const response =await fetch(`https://spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();
    return data.recipes;
}

 async function initial(){
    const recipes = await getRecipes();
    displayRecipes()
    console.log (recipes);
    
}