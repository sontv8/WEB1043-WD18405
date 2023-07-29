var productName = document.querySelector("#prd-name")
var price = document.querySelector("#price")
var form = document.querySelector("form")
var nameError = document.querySelector("#prd-name-error")
var priceError = document.querySelector("#price-error")

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function checkLength(element, message) {
    if (element.value == "") {
        return message;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var errors = {};
    errors.name = checkLength(productName, "Product name is required")
    errors.price = checkLength(price, "Price is required")
    // if (productName.value == "") {
    //     errors.name = "Product name is required"
    // }
    // if (price.value == "") {
    //     errors.price = "Price is required"
    // }


    if (!isEmpty(errors)) {
        nameError.innerHTML = errors.name ? errors.name : "";
        priceError.innerHTML = errors.price ? errors.price : "";
    } else {
        console.log("ok");
    }
})