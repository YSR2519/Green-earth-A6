const loadCategoris = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};
const loadPlants = (id) =>{
    const url = `https://openapi.programming-hero.com/api/plants/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> displayPlants(data.plants));
};


// "id": 1,
//       "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//       "name": "Mango Tree",
//       "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//       "category": "Fruit Tree",
//       "price": 500
//     },
const displayPlants = (allPlants) => {
const card = document.getElementById("card");
card.innerHTML = "";

allPlants.forEach((allPlant)=>{
    const divCard = document.createElement("div");
    divCard.innerHTML = `
  

     <figure>
        <img src="${allPlant.image}" alt="${allPlant.name}" class="rounded-t-xl h-48 w-full object-cover"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${allPlant.name}</h2>
        <p class="text-sm text-gray-600">${allPlant.description}</p>
        <div class="grid grid-cols-2 items-center mt-3">
          <button class="bg-green-100 text-green-700 px-2 py-1 rounded-lg">${allPlant.category}</button>
          <p class="text-right font-bold text-green-700">৳${allPlant.price}</p>
        </div>
        <div class="card-actions mt-3">
          <button class="btn bg-green-500 w-full rounded-3xl text-white">Add to cart</button>
        </div>
      </div>
    `;
    card.append(divCard);
  });
};

       

// const displayCategory = (categories) => {
//     const allCategoris = document.getElementById("categoris");
//     allCategoris.innerHTML = "";
//     for(const category of categories){
//         const cataDiv = document.createElement("div");
//         cataDiv.innerHTML = `
//         <button onclick = "loadPlants('${category.category_name}')" class="btn btn-ghost hover:bg-green-500  " >${category.category_name}</button>
//         `;
//         allCategoris.append(cataDiv);
//     }
// }
const displayCategory = (categories) => {
  const allCategoris = document.getElementById("categoris");
  allCategoris.innerHTML = "";

  for (const category of categories) {
    const cataDiv = document.createElement("div");
    cataDiv.innerHTML = `
      <button 
        class="category-btn btn btn-ghost hover:bg-green-500 w-full text-left"
        data-id="${category.category_name}">
        ${category.category_name}
      </button>
    `;
    allCategoris.append(cataDiv);
  }

   // Add event listeners for category buttons
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      categoryButtons.forEach((b) =>
        b.classList.remove("bg-green-600", "text-white")
      );

      e.target.classList.add("bg-green-600", "text-white");
      loadPlants(id);
    });

    if (index === 0) {
      btn.classList.add("bg-green-600", "text-white");
      loadPlants(btn.dataset.id);
    }
  });
};
loadCategoris();