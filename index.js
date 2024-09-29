let allRecipes = []; // Global variable to store all fetched recipes

async function getProduct() {
    try {
        const data = await fetch('https://dummyjson.com/recipes');
        const res = await data.json();

        // Assuming the API returns an object with a 'recipes' array
        allRecipes = res.recipes || res; 

        renderRecipes(allRecipes); // Call a function to render the recipes
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

function renderRecipes(recipes) {
    const products = document.getElementById('products');
    if (products) {
        products.innerHTML = ""; // Clear existing products
        for (let i = 0; i < recipes.length; i++) {
            products.innerHTML += `
                <div class="card" style="width: 19rem;">
                    <img src="${recipes[i].image}" class="card-img-top" style="height: 300px;">
                    <div class="card-body text-center">
                        <h5 class="card-title mt-3" style="height: 40px;">${recipes[i].name}</h5>
                        <p class="card-text text-center my-4" style="height: 20px;">${recipes[i].cuisine}</p>
                        <a href="#" class="btn btn-secondary" style="height: 40px;" onclick="showInDiv('${recipes[i].name}', '${recipes[i].ingredients.join(', ')}', '${recipes[i].instructions}', '${recipes[i].mealType}')">Get Recipe</a>


                    </div>
                </div>`;
        }
    } else {
        console.error('Element with id "products" not found');
    }
}

function searchRecipes() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = allRecipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || 
        recipe.cuisine.toLowerCase().includes(query)
    );
    renderRecipes(filteredRecipes); 
}

document.getElementById("searchButton").addEventListener("click", searchRecipes);

document.getElementById("searchInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchRecipes(); 
        event.preventDefault(); 
    }
});

getProduct(); 

 

function showInDiv(recipeName, ingredients, instructions, mealType) {
    const detailsContainer = document.getElementById('recipeDetails');
    const content = `
        <h1>${recipeName}</h1>
        <div class="ingredients">
            <h2>Ingredients</h2>
            <ul>${ingredients.split(',').map(item => `<li>${item.trim()}</li>`).join('')}</ul>
        </div>
        <div class="instructions">
            <h2>Instructions</h2>
            <p>${instructions}</p>
        </div>
        <div class="meal-type">
            <h2>Meal Type</h2>
            <p>${mealType}</p>
        </div>
    `;
    document.getElementById('detailsContent').innerHTML = content;
    detailsContainer.style.display = 'block';
}

function closeDetails() {
    document.getElementById('recipeDetails').style.display = 'none';
}


// // Function to open a new tab for recipe details
// function newTab(recipeName, ingredients, instructions, mealType) {
//     // Open a new window/tab
//     let tab = window.open('', '_blank', 'width=420,height=380,left=450,top=200');

//     // Write the HTML content to the new tab
//     tab.document.write(`
//         <html>
//           <head>
//             <title>${recipeName}</title>
//             <style>
//               body { font-family: Arial, sans-serif; margin: 20px; }
//               h1 { color: #333; }
//               .ingredients, .instructions, .meal-type { margin-bottom: 20px; }
//             </style>
//           </head>
//           <body>
//             <h1>${recipeName}</h1>
//             <div class="ingredients">
//               <h2>Ingredients</h2>
//               <ul>${ingredients.split(',').map(item => `<li>${item.trim()}</li>`).join('')}</ul>
//             </div>
//             <div class="instructions">
//               <h2>Instructions</h2>
//               <p>${instructions}</p>
//             </div>
//             <div class="meal-type">
//               <h2>Meal Type</h2>
//               <p>${mealType}</p>
//             </div>
//           </body>
//         </html>
//     `);
    
//     // Finalize the document
//     tab.document.close();
// }

// newTab('Spaghetti Bolognese', 'pasta, beef, tomato sauce', 'Cook pasta, prepare sauce, combine and serve', 'Dinner');

// function renderRecipes(recipes) {
//     const products = document.getElementById('products');
//     if (products) {
//         products.innerHTML = ""; // Clear existing products
//         for (let i = 0; i < recipes.length; i++) {
//             products.innerHTML += `
//                 <div class="card" style="width: 19rem;">
//                     <img src="${recipes[i].image}" class="card-img-top" style="height: 300px;">
//                     <div class="card-body text-center">
//                         <h5 class="card-title mt-3" style="height: 40px;">${recipes[i].name}</h5>
//                         <p class="card-text text-center my-4" style="height: 20px;">${recipes[i].cuisine}</p>
//                         <a href="#" class="btn btn-secondary" style="height: 40px;" onclick="newTab('${recipes[i].name}', '${recipes[i].ingredients.join(', ')}', '${recipes[i].instructions}', '${recipes[i].mealType}')">Get Recipe</a>
//                     </div>
//                 </div>`;
//         }
//     } else {
//         console.error('Element with id "products" not found');
//     }
// }

// async function getProduct() {
//     try {
//         const data = await fetch('https://dummyjson.com/recipes');
//         const res = await data.json();

        
//         console.log(res);


//         const recipes = res.recipes || res;

//         for (let i = 0; i < recipes.length; i++) {
//             console.log(recipes[i]);

//             const products = document.getElementById('products');
//             if (products) {
//                 products.innerHTML += `
//                 <div class="card" style="width: 19rem;">
//                     <img src="${recipes[i].image}" class="card-img-top" style="height: 300px;">
//                     <div class="card-body text-center">
//                         <h5 class="card-title mt-3" style="height: 40px;">${recipes[i].name}</h5>
//                         <p class="card-text text-center my-4" style="height: 20px;">${recipes[i].cuisine} </p>
//                         <a href="#" class="btn btn-secondary" style="height: 40px;">Get Recipe</a>
//                     </div>
//                 </div>`;
//             } else {
//                 console.error('Element with id "products" not found');
//             }
//         }
//     } catch (err) {
//         console.error('Error fetching data:', err);
//     }
// }

// getProduct();

// function searchRecipes() {
//     const query = document.getElementById("searchInput").value.toLowerCase();
//     const filteredRecipes = allRecipes.filter(menu => 
//       recipes.name.toLowerCase().includes(query) || 
//       recipes.cuisine.toLowerCase().includes(query)
//     );
//     getProduct(filteredRecipes); 
//   }
  
//   document.getElementById("searchButton").addEventListener("click", searchRecipes);
  
//   document.getElementById("searchInput").addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       searchRecipes(); 
//       event.preventDefault(); 
//     }
//   });
  
//   // Function to open new tab for recipe details
//   function newTab(url, ingredients, instructions, mealType) {
//     let tab = window.open(url, url, 'width=420,height=380,left=450,top=200');
    
//     tab.document.write(`
//         <html>
//           <head>
//             <title>${url.replace('-', ' ')}</title>
//             <style>
//               body { font-family: Arial, sans-serif; margin: 20px; }
//               h1 { color: #333; }
//               .ingredients, .instructions, .meal-type { margin-bottom: 20px; }
//             </style>
//           </head>
//           <body>
//             <h1>${url.replace('-', ' ')}</h1>
//             <div class="ingredients">
//               <h2>Ingredients</h2>
//               <p>${ingredients}</p>
//             </div>
//             <div class="instructions">
//               <h2>Instructions</h2>
//               <p>${instructions}</p>
//             </div>
//             <div class="meal-type">
//               <h2>Meal Type</h2>
//               <p>${mealType}</p>
//             </div>
//           </body>
//         </html>
//     `);
    
//     tab.document.close();
//   }