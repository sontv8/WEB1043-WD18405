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

var productName = document.querySelector('#product-name')
var productBrand = document.querySelector('#product-brand')
var productPrice = document.querySelector('#product-price')

console.log(product.name);
productName.innerHTML = product.name
productBrand.innerHTML = product.brand
productPrice.innerHTML = product.price