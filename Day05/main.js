// console.log(document.getElementById('main-title'));
// var h2Tag = document.getElementsByTagName('h2')
// console.log(h2Tag[0]);
// console.log(document.getElementsByClassName('title'));

// console.log(document.querySelectorAll('h2'));

// var mainTitle = document.querySelector('#main-title')
// // mainTitle.innerHTML = 'Helo cac ban';
// // mainTitle.id = 'abcd';
// mainTitle.className = 'abc';
// mainTitle.style.border = '5px dashed orange';
// mainTitle.style.fontSize = '50px';

/*
    thiết lập chiều rộng cho khối div có class box là 300px
    thiết lập chiều cao cho khối div có class box là 300px
    thiết lập background color là màu xanh
    cập nhật nội dung hiển thị bên trong khối div là "My box"
    thay đổi class thành "red-box"
    thêm id cho khối div là "red-box"
*/

// var box = document.querySelector('.box')
// box.style.width = '300px';
// box.style.height = '300px';
// box.style.backgroundColor = 'blue';
// box.innerHTML = 'My box';
// box.className = 'red-box';
// box.id = 'red-box'
/*
    <div id="product">
        <h3 id="product-name"></h3>
        <p id="product-brand"></p>
        <p id="product-price"></p>
    </div>
*/
var product = {
    id: 1,
    name: 'Iphone 14 pro max',
    brand: 'Apple',
    price: '799$'
}

// var productName = document.querySelector('#product-name')
// var productBrand = document.querySelector('#product-brand')
// var productPrice = document.querySelector('#product-price')

// console.log(product.name);
// productName.innerHTML = product.name
// productBrand.innerHTML = product.brand
// productPrice.innerHTML = product.price

var productDiv = document.querySelector('#product')
// productDiv.innerHTML = "<p>" + product.brand + "</p>";
// productDiv.innerHTML = "<h3>" + product.name + "</h3>"
//     + "<p>" + product.brand + "</p>"
//     + "<p>" + product.price + "</p>";

var myName = 'sontv';
// productDiv.innerHTML = 'Tài khoản: ' + myName;
productDiv.innerHTML = `
    <h3 id="brand">${product.brand}</h3>
    <p>${product.name}</p>
    <p>${product.price}</p>
`;

var menus = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Shop', path: '/shop' },
    { id: 3, name: 'Blog', path: '/blog' },
    { id: 4, name: 'Category', path: '/category' },
    { id: 5, name: 'About', path: '/about' }
]
var services = [
    { id: 1, name: "RECYCLE" },
    { id: 2, name: "CUSTOM" },
    { id: 3, name: "HANDMADE" }
]
var members = [
    { id: 1, name: "Yeung Ngai", position: "DESIGNER", image: "https://picsum.photos/328/442" },
    { id: 2, name: "Nicolas Waldau", position: "ARCHITECT", image: "https://picsum.photos/328/442" },
    { id: 3, name: "Juliette Massé", position: "STORE MANAGER", image: "https://picsum.photos/328/442" },
    { id: 4, name: "Nicolette Ritonni", position: "FINE CERAMICS", image: "https://picsum.photos/328/442" },
]