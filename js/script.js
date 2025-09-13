const loadCategoris = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

const displayCategory = (categories) => {
    const allCategoris = document.getElementById("categoris");
    allCategoris.innerHTML = "";
    for(const category of categories){
        const cataDiv = document.createElement("div");
        cataDiv.innerHTML = `
        <button class="btn btn-ghost hover:bg-green-500  " >${category.category_name}</button>
        `;
        allCategoris.append(cataDiv);
    }
}

loadCategoris();