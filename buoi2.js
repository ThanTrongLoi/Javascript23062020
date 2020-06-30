//11: for of
//Array
// var arrayNames = ["teo", "ti", "tun", "hoa", "tuan"]
// for (const iterator of arrayNames) {
//     console.log(iterator)
// }
//Object
// const objNames = {
//     name: "teo",
//     age: 10
// }
// for (const x of objNames){
//     console.log(x)
// }
// ví dụ
// function multiply(arr) {
//     var tich = 1;
//     for (const iterator of arr) {
//         tich *= iterator;
//     }
//     return tich;
// }
// multiply([2, 3, 4])
// console.log(multiply([2, 3, 4])); // expect: 24

//12: Array Method
const arrayNames1 = ["teo", "ti", "tun"];
const arrayNames2 = ["hoa", "tuan"]

// thêm vị trí cuối: push
// arrayNames.push("toan")
// xoá vị trí cuối: pop
// arrayNames.pop()
// thêm vị trí đầu: unshift
// arrayNames.unshift("A")
// xoá vị trí đầu: shift
// arrayNames.shift()
// nối dữ liệu: concat
const newArrays = arrayNames1.concat(arrayNames2)
console.log(newArrays)


