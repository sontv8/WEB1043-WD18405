var menus = [
    { id: 1, name: "Home", path: "/ " },
    { id: 2, name: "Features", path: "/features.html " },
    { id: 3, name: "Recept", path: "/recept.html " },
    { id: 4, name: "Dessert", path: "/dessert.html " },
    { id: 5, name: "Contact", path: "/contact.html " },
];
var foods = [
    { id: 1, image: "https://picsum.photos/448/448 ", name: "Delish Lemon Bars for Any Occasion", date: "JAN 12, 2020" },
    { id: 1, image: "https://picsum.photos/448/448 ", name: "Tortilla & Ricotta Cheese Salad", date: "JAN 13, 2020" },
    { id: 1, image: "https://picsum.photos/448/448 ", name: "Summer Breakfast for Healthy Mornings", date: "JAN 14, 2020" }
];

var ul = document.querySelector("ul")

for (item of menus) {
    ul.innerHTML += `<li><a href="${item.path}">${item.name}</a></li>`
}

var productContent = document.querySelector(".product-content");
for (item of foods) {
    productContent.innerHTML += `
        <div class="item">
            <img src="${item.image}" alt="">
            <h3>${item.name}</h3>
            <p>${item.date}</p>
            <button>View Detail</button>
        </div>
    `
}