// 22: toán tử 3 ngôi: Ternary operator
// const a = 5;
// const b = 6;
// if(a > b){
//     console.log("A lon hon B")
// }else{
//     console.log("A be hon bang B")
// }
// ===============
// console.log(a > b ? "A lon hon B" : "A be hon bang B") // toan tu 3 ngoi

//23: Function Scope
// var a = 5
// function tinhtong(){
//     var a = 7;
//     var b = 6;
//     return a + b
// }
// console.log(tinhtong())

// var a = 1
// function random(){
//     var a = Math.random()
//     console.log(a)
// }
// random()
// console.log(a)

//scope: phạm vi => khi biến trùng tên sẽ ưu tiên scope trong function trước
// từ trong truy vấn từ ngoài đc còn ngoài không truy vấn từ trong đc 

//24: cách sử dụng từ khoá khai báo biến : xem file javascript nâng cao

//25: function context and bind
// const teo = {
//     name: 'nguyen van teo',
//     age: 20,
//     showName : function(){
//         console.log(this.name)
//     }
// }
// // teo.showName();
// const showName2 = teo.showName.bind(teo) // teo.showName.bind(name: "abc") : true
// showName2()

//26: Arrow function

// const teo = {
//     name: 'nguyen van teo',
//     age: 20,
//     showName: function(){
//         console.log(this.name)
//         var a = () => {
//             console.log(this.name)
//         }
//         a()
//     }
//     //closures 
// }
// teo.showName()

// const arrayNames = ['Teo','Ti','Tun']
// const newArrayNames = arrayNames.map(function(value){
    // return 'Ti'
// })
// const newArrayNames = arrayNames.map(value => {
//     return value
// })
// console.log(newArrayNames)

// const showName = () => {} // nên dùng arow function thay function

//27: Template string (backtick: ``)

// const teo = {
//     name: 'nguyen van teo',
//     age: 20,
// }
// const string = "xin chao " + teo.name + ". Ban hien tai " + teo.age + " tuoi"
// const string1 = `xin chao ${teo.name}. Ban hien tai ${teo.age} tuoi`
// console.log(string)
// console.log(string1)

//28: Arguments
// const obj = {
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thuy',
//     length: 3,
// }
// console.log(Array.from(obj))

// function tinhtong(){
//     return Array.from(arguments).reduce((accum, currentValue) => {
//         return accum + currentValue
//     },0)
// }
// console.log(tinhtong(1,2,3,4,5,6,7,8,9,10))

//29: Default parameters
// function tinhtong(a = 5, b = 5){
//     console.log(a+b)
// }
// tinhtong()

//30: Call
// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age} . Adress ${this.address} . Gender ${this.gender}`)
//   }
//   greeting.call({address: 'quan 10', gender: 'male'} , 'Tom' , 10)

//31: Apply

function sum(){
    const numbers = Array.from(arguments)
    return numbers.reduce((sum, num)=>sum + num , 0)
}
function average(){
    const x = sum.apply(null, arguments)
    return x / arguments.length
}
average(1,3,6)