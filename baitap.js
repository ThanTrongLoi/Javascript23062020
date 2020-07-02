// //Bài 1: Biến
// // Khai báo 2 biến x, y nhận giá trị số bất kì
// var x = 1;
// var y = 2;
// // Khai báo các biến khác và lần lượt gán giá trị tổng, hiệu, tích, thương của x, y cho từng biến.
// var tong = x + y;
// var hieu = x - y;
// var tich = x * y;
// var thuong = x / y;
// console.log(tong, hieu, tich, thuong)

// //Bài 2: Kiểu dữ liệu
// /**
//  * Sử dụng các kiến thức đã học trong bài khai báo các biến mô tả một người, vật nào đó mà bạn thích
//  * Ví dụ dưới đây mô tả thời tiết ngày hôm nay
//  *  var today = 'Sunday';
//  *  var isCloudy = true;
//  *  var currentTemperature = 30;
//  */
// var animal = "Dog";
// var species = "Corgi";
// var age = 2;
// var tail = false;
// var bark = true;

// //Bài 3: Object
// /**
//  * Sử dụng kiến thức đã học khai báo object person gồm các property name, age, gender. 
//  * Ví dụ:
//  *  var person = {
//  *    name: 'Pham tan phat',
//  *    age: 25,
//  *    gender: 'male'
//  *  };
//  */
// var person = {
//     name: "Thân Trọng Lợi",
//     age: 21,
//     gender: 'male',
// }

// //Bài 4: Arraylist
// /*
// Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
// Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
//  * {name}: string;
//  * {age}: number;
// */
// var listAnimal = [
//     ['Corgi', 2],
//     ['Husky', 3],
//     ['Alaska', 2]
// ]
// console.log(listAnimal)

// //Bài 5: Arithmetic operator (toán tử)

// //Ví dụ 1:
// /**
//  * a: cạnh đáy của 1 hình tam giác
//  * h: chiều cao của tam giác đó
//  * Yêu cầu: khai báo biến s bằng diện tích của hình tam giác này 
// */
// var a = 10;
// var h = 20;
// var s = (a * h) / 2;
// console.log(s)

// //Ví dụ 2:
// /**
//  * width: Chiều rộng của 1 hình chữ nhật
//  * height: Chiều cao của hình chữ nhật
//  * s: diện tích của hình chữ nhật (code mẫu)
//  * Yêu cầu: 
//  * - Khai báo biến p là chu vi của hình chữ nhật này.
//  */
// var width = 10;
// var height = 20;

// var s = width * height;
// var p = (width + height) * 2;

// // console.log(p)

// //Ví dụ 3:
// /**
//  * r: Bán kính của 1 hình tròn
//  * s: Diện tích của hình tròn đó
//  * Yêu cầu: 
//  * - Khai báo biến p là chu vi của hình tròn này.
//  */
// var r = 10;

// var s = r * r * 3.14;
// var p = 2 * 3.14 * r;
// // console.log(p)

// //Bài 6: Phép tính tăng giảm
// //Ví dụ:
// // Nhấn Run để chạy code.
// // Giải thích vì sao kết quả là 18.
// var a = 10;

// var x = --a + a++;
// //  x =  9  + a++; //a = 9;
// //  x =  9  +  9; //a = 10;
// //  x =     10

// console.log(x);

// //Ví dụ:
// // Nhấn Run để chạy code
// // Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
// var a = 10;
// var b = 18;

// var x = a-- + b++ - ++b - ++a;
// //  x =  10 + b++ - ++b - ++a; //a = 9;
// //  x =  10 +  18 - ++b - ++a; //a = 9, b =19;
// //  x =  10 +  18 -  20 - ++a; //a = 9, b =20;
// //  x =  10 +  18 -  20 -  10; //a = 9, b =20;
// //  x =        18 -  20
// //  x =           -2

// console.log(x);

// //Bài 7: Phép gán
// /**
//  * Viết ra tất cả các cách khác nhau có thể (trong phạm vi bài học) để gấp đôi a
//  */
// var c = 10;
// c = c * c;

// //Bài 8: Function 
// // Bài tập: Viết hàm tính thể tích khối hộp.
// // Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

// /**
//  * Tính thể tích khối hộp
//  * https://www.wikihow.com/Calculate-Volume-of-a-Box
//  * @param {Number} w Chiều rộng
//  * @param {Number} h Chiều cao
//  * @param {Number} l Chiều dài
//  * @returns {Number} Diện tích
//  */
// function getBoxVolume(w, h, l) {
//   // Viết code ở đây
//   var s = w * h * l
//   return s;
// }

// console.log(getBoxVolume(10, 20, 30)); // 6000
// console.log(getBoxVolume(4, 5, 6)); // 120

// //Bài 9: Object method
// /**
//  * Khai báo biến `rectangle` là 1 object gồm có các property:
//  * - width: chiều rộng, là 1 số bất kì
//  * - height: chiều cao, là 1 số bất kì
//  * Viết các method:
//  * - getWidth: trả về chiều rộng
//  * - getHeight: trả về chiều cao
//  * - getArea: trả về diện tích
//  */
// var rectangle = {
//     width: 2,
//     height: 2,
//     getWidth: function(){
//         console.log(this.width)
//     },
//     getHeight: function(){
//         console.log(this.height)
//     },
//     getArea: function(){
//         console.log(this.area)
//     }
// }
// console.log(rectangle)
// rectangle.getWidth();
// rectangle.getHeight();
// rectangle.getArea();







