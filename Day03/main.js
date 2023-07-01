// /*
//     Hàm - function
//     1. Hàm không có tham số và không có giá trị trả về
//     2. Hàm không có tham số và có giá trị trả về
//     3. Hàm có tham số và không có giá trị trả về
//     4. Hàm có tham số và có giá trị trả về
// */
// function sum() {
//     // console.log(arguments);
//     // var total = 0;
//     for (let item of arguments) {
//         // console.log(item);
//         total += item;
//         // v1   0        10 -> total = 10
//         // v2   10       20 -> total = 30
//         // v3   30       30 -> total = 60
//     }
//     console.log(total);
// }
// sum(10, 20, 30, 50, 100);
// // var arr = [1, 2, 3, 4, 5]
// // arr.forEach((item) => {
// //     console.log(item);
// // })

// // function tienDanhDe(tienVayBan, tienVayBoMe) {
// //     var tongTien = tienVayBan + tienVayBoMe;
// //     return tongTien;
// // }
// // function tinhTien() {
// //     var tienLai = tienDanhDe(1000, 500) * 70;
// //     console.log(tienLai);
// // }
// // tinhTien()



var products = ["iphone", 1000, 50];
/*
    thêm mới giá trị vào cuối mảng
    thêm mới vào đầu mảng
    xóa phần tử cuối mảng
    xóa phần tử đầu mảng
    thêm, sửa, xóa phần tử ở vị trí bất kỳ
*/
// products.push("abcd", "hhhh");
// products.unshift("New Product");
// products.pop();
// products.shift();
products.splice(0, 1);
/*
    hàm splice nhận vào 3 tham số
        tham số 1: vị trí cần thực hiện
        tham số 2: deleteCount
            nếu giá trị là 0 -> thêm mới
            nếu giá trị là 1 -> xóa 1 phần tử ở vị trí index là tham số 1
        tham số 3: giá trị mới
*/
console.log(products);