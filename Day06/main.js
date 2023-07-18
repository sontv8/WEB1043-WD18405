var menus = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Shop', path: '/shop' },
    { id: 3, name: 'Blog', path: '/blog' },
    { id: 4, name: 'Category', path: '/category' },
    { id: 5, name: 'About', path: '/about' }
]

var ul = document.querySelector("ul")

for (let item of menus) {
    console.log(item.name);
    ul.innerHTML += `
        <li><a href="${item.path}">${item.name}</a></li>
    `
}