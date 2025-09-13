// // ------------------------------
// Variables
// ------------------------------
let cart = [];
const categoriesContainer = document.getElementById("categoris");
const cardContainer = document.getElementById("card");
const cartContainer = document.getElementById("add-card");

// ------------------------------
// Fetch and display categories
// ------------------------------
const loadCategories = async () => {
  try {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    displayCategories(data.categories);
  } catch (err) {
    console.error("Error loading categories:", err);
  }
};

const displayCategories = (categories) => {
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "category-btn btn btn-ghost hover:bg-green-500 w-full text-left";
    btn.textContent = category.category_name;
    btn.dataset.id = category.category_name;

    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".category-btn").forEach((b) =>
        b.classList.remove("bg-green-600", "text-white")
      );
      e.target.classList.add("bg-green-600", "text-white");

      loadPlants(category.category_name);
    });

    categoriesContainer.appendChild(btn);
  });

  // Highlight first category by default
  const firstBtn = categoriesContainer.querySelector(".category-btn");
  if (firstBtn) {
    firstBtn.classList.add("bg-green-600", "text-white");
    loadPlants(firstBtn.dataset.id);
  }
};

// ------------------------------
// Fetch and display plants
// ------------------------------
const loadPlants = async (id = "") => {
  try {
    const url = id
      ? `https://openapi.programming-hero.com/api/plants/${id}`
      : "https://openapi.programming-hero.com/api/plants"; // all plants
    const res = await fetch(url);
    const data = await res.json();
    displayPlants(data.plants);
  } catch (err) {
    console.error("Error loading plants:", err);
  }
};

const displayPlants = (plants) => {
  cardContainer.innerHTML = "";

  if (!plants || plants.length === 0) {
    cardContainer.innerHTML = `<p class="text-center col-span-3">No plants found</p>`;
    return;
  }

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "card bg-white shadow-md rounded-xl overflow-hidden";

    card.innerHTML = `
      <figure>
        <img src="${plant.image}" alt="${plant.name}" class="rounded-t-xl h-48 w-full object-cover"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">${plant.name}</h2>
        <p class="text-sm text-gray-600">${plant.description}</p>
        <div class="grid grid-cols-2 items-center mt-3">
          <button class="bg-green-100 text-green-700 px-2 py-1 rounded-lg">${plant.category}</button>
          <p class="text-right font-bold text-green-700">৳${plant.price}</p>
        </div>
        <div class="card-actions mt-3">
          <button class="btn bg-green-500 w-full rounded-3xl text-white add-to-cart"
                  data-id="${plant.id}"
                  data-name="${plant.name}"
                  data-price="${plant.price}">
            Add to cart
          </button>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const plant = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        price: parseFloat(e.target.dataset.price),
      };
      cart.push(plant);
      displayCart();
    });
  });
};

// ------------------------------
// Display cart
// ------------------------------
const displayCart = () => {
  cartContainer.innerHTML = "<h2 class='font-bold text-lg mb-3'>Your Cart</h2>";

  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>No items in cart</p>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white rounded-md px-3 py-2 mb-2 shadow";

    div.innerHTML = `
      <span>${item.name}</span>
      <div class="flex items-center gap-2">
        <span class="font-bold text-green-700">৳${item.price}</span>
        <button class="remove-btn text-red-500" data-index="${index}">X</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  cartContainer.innerHTML += `<hr class="my-2"/><p class="font-bold text-right">Total: ৳${total}</p>`;

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      displayCart();
    });
  });
};

// ------------------------------
// Initialize
// ------------------------------
loadCategories();
loadPlants(); // show all plants by default
