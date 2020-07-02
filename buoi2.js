// //11: for of
// //Array
// // var arrayNames = ["teo", "ti", "tun", "hoa", "tuan"]
// // for (const iterator of arrayNames) {
// //     console.log(iterator)
// // }
// //Object
// const objNames = {
//     name: "teo",
//     age: 10
// }
// for (const x of objNames){
//     console.log(x)
// }
// // ví dụ
// // function multiply(arr) {
// //     var tich = 1;
// //     for (const iterator of arr) {
// //         tich *= iterator;
// //     }
// //     return tich;
// // }
// // multiply([2, 3, 4])
// // console.log(multiply([2, 3, 4])); // expect: 24

// //12: Array Method
// // const arrayNames1 = ["teo", "ti", "tun"];
// // const arrayNames2 = ["hoa", "tuan"]

// // thêm vị trí cuối: push
// // arrayNames.push("toan")
// // xoá vị trí cuối: pop
// // arrayNames.pop()
// // thêm vị trí đầu: unshift
// // arrayNames.unshift("A")
// // xoá vị trí đầu: shift
// // arrayNames.shift()
// // nối dữ liệu: concat
// // const newArrays = arrayNames1.concat(arrayNames2)
// // console.log(newArrays)

// // 13: Callback
// // var a

// // handle(function(a){
// //     console.log(a)
// // })

// // function handle(cb){
// //     setTimeout(function(){
// //         a = 5
// //         cb(a)
// //     },2000)
// // }

// // function binhphuong(num){
// //     return num*num
// // }
// // function tinhtongArray(arr, fn){
// //     var ketqua = 0;
// //     for(const value of arr){
// //         ketqua += fn(value)
// //     }
// //     return ketqua;
// // }
// // const arrayNums = [1,2,3,4,5]x   
// // console.log(tinhtongArray(arrayNums,binhphuong))

// //14: hàm map
// // const arrayNums = [1,2,3,4,5,6,7,8,9,10]
// // // const newArrayNums = []
// // // for (const value of arrayNums) {
// // //     newArrayNums.push(value + 1)
// // // }

// // const newArrayNums = arrayNums.map(function(value, index){
// //     console.log(value + 1)
// //     return value + 1
// //     // hàm map không thay đổi kích thước của mảng, chỉ thay đổi giá trị của mảng

// // })
// // console.log(newArrayNums)
// // console.log(arrayNums)