// // 1: khai báo biến
// // var a = 5;
// // const b = 6;
// // a = 10;
// // b = 12;
// // console.log(a);
// // console.log(b);
// //const: mặc định, var: có thể thay đổi

// // 2: kiểu dữ liệu
// // Null, Undefined # null, undefined
// // null, undefined
// // var a = null
// // console.log('a = '+a)
// // var b
// // console.log('b = '+b) //b => undefined

// // 3: Object
// // object: đại diện cho 1 cá thể, class: đại diện cho 1 tập thể
// const teo = {
// //  key: value
//     name: 'Nguyen Van Teo',
//     age: 10,
// }
// console.log(teo.name, teo.age + " tuổi")
// console.log(teo['name'])
// // Trường hợp 2: Truy vấn tới key không tồn tại của object
// console.log(teo.address)
// // Trường hợp 3: Function không return => undefined
// function showName(name){
//     console.log(name)
//     return
// }
// console.log(showName("Loi"))

// // 4: Array
// const arrayNames = ["Teo", "Ti", "Tun"]
// arrayNames[0] = "Tuan"
// console.log(arrayNames[0])
// // mutable vs immutable

// // 5: toán tử
// // + - * / , ++ , -- 

// // Độ ưu tiên của toán tử
// // 1: ++ --
// // 2: * /
// // 3: +, -
// var a = 5
// var b = 6
// var ketqua = a++ - --b + --a + b-- + ++a - b++ + b-- - b++
// //           5   - --b + --a + b-- + ++a - b++ + b-- - b++
// //           5   -  5  + --a + b-- + ++a - b++ + b-- - b++
// //           5   -  5  +  5  + b-- + ++a - b++ + b-- - b++
// //           5   -  5  +  5  +  5  + ++a - b++ + b-- - b++
// //           5   -  5  +  5  +  5  +  6  - b++ + b-- - b++
// //           5   -  5  +  5  +  5  +  6  - 4   + b-- - b++
// //           5   -  5  +  5  +  5  +  6  - 4   +  6  _ b++
// //           5   -  5  +  5  +  5  +  6  - 4   +  6  _ 5
// //               0          10           2          1  = 13
// console.log(ketqua)

// //6: Function
// // Phạm vi truy cập (access modifier)
// function showName(name){
//     console.log(name)
     
// }

// showName("Loi")

// //7: Object method
// const teo2 = {
//     name: "Nguyen Van Teo",
//     age: 10,
//     info: function(){
//         console.log("Name "+this.name)
//         console.log("Age "+this.age)
//     }
// }
// teo2.info()

//8: Phép so sánh
//  var a = 10
//  var b = "10"
//  console.log(a==b)
//  console.log(a===b)

//9: vòng lặp for
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

//10: for in
// var arrayNames = ["teo", "ti", "tun"< "hoa", "tuan"]
// for (const key in arrayNames) {
//     console.log(key)
// }

// Ví dụ
// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
// function getKey(object){
//     for (const key in object) {
//         console.log(key)
//         if(typeof object[key] == "object"){
//             getKey(object[key])
//         }
//     //     const bedroom = obj[key]
//     //     for (const keyBedRoom in bedroom){
//     //         if(keyBedRoom == "bed"){
//     //             const bed = bedroom["bed"]
//     //             for(const keybed in bed){
//     //                 console.log(keybed)
//     //             }
//     //         }
//     //         console.log(keyBedRoom)

//     //     }
//     }
// }
// getKey(apartment)


