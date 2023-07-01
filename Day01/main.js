// comment 1 dòng
/*
    comment 1
    comment 2
    ...
*/

/*
    1. Biến
        Cú pháp khai báo biến:
            var, let, const
            [từ khóa] [tên biến] = [giá trị]
*/

// var username = 'sontv';
// username.toLowerCase();
// console.log(username);

/*
    Một số hàm built-in trong Js
    - console.log()
    - prompt()
    - alert()
    - confirm()
*/

// var myName = prompt('Nhập tên của bạn: ');
// console.log(myName);
// var message = 'Bạn vừa xóa sản phẩm thành công';
// alert(message)

// confirm('Bạn có chắc chắn muốn tán cô này không?')

// if (confirm()) {
//     console.log(1);
// } else {
//     console.log(0);
// }


// var hoTen = prompt("Nhập họ tên: ");
// var mucLuong = prompt("Nhập mức lương: ");
// var tongLuong = 0;
// if (mucLuong <= 0) {
//     console.log("Luong khong duoc nho hon 0");
// } else {
//     console.log(hoTen);
//     for (let i = 1; i <= 12; i++) {
//         tongLuong += Number(mucLuong);
//     }
//     console.log(tongLuong);
// }


/*
    Bài 4:
    Nhập vào từ bàn phím 1 số bất kỳ
    Nếu giá trị nhập vào nhỏ hơn 0 thì thực hiện lặp lại việc nhập
    Đếm xem có bao nhiêu số chia hết cho 2 tính từ 1 đến số nhập vào
    và hiển thị ra tất cả các số đó
*/

// do {
//     var soNhap = prompt("Nhập vào 1 số bất kỳ: ");
// } while (soNhap <= 0)
// console.log(soNhap);
// var dem = 0;
// for (i = 1; i <= soNhap; i++) {
//     if (i % 2 == 0) {
//         dem++;
//     }
// }
// console.log("So luong cac so chia het cho 2: ", dem);

var so = prompt("Nhap so: ");
if (isNaN(so)) {
    console.log("gia tri khong phai la so");
} else {
    console.log("gia tri la so");
}
// is not a number -> true
// is a number -> false 