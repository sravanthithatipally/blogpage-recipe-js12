let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let titleele = document.getElementById("title");
titleele.textContent = recipeObj.title;

let imageele = document.getElementById("image");
imageele.setAttribute("src", recipeObj.imgSrc);

let ingredients_cont = document.getElementById("ingredients-box");

let ingredient_list = recipeObj.ingredients;
for (let item of ingredient_list) {
    let list_ele = document.createElement("li");
    list_ele.textContent = item;
    list_ele.classList.add("itemstyle");
    ingredients_cont.appendChild(list_ele);
}