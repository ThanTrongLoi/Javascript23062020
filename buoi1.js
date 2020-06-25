// 1: khai báo biến
// var a = 5;
// const b = 6;
// a = 10;
// b = 12;
// console.log(a);
// console.log(b);
//const: mặc định, var: có thể thay đổi

// 2: kiểu dữ liệu
// Null, Undefined # null, undefined
// null, undefined
// var a = null
// console.log('a = '+a)
// var b
// console.log('b = '+b) //b => undefined

// 3: Object
// object: đại diện cho 1 cá thể, class: đại diện cho 1 tập thể
const teo = {
//  key: value
    name: 'Nguyen Van Teo',
    age: 10,
}
console.log(teo.name, teo.age + " tuổi")
console.log(teo['name'])
// Trường hợp 2: Truy vấn tới key không tồn tại của object
console.log(teo.address)

// 4: Array
const arrayNames = ["Teo", "Ti", "Tun"]
arrayNames[0] = "Tuan"
console.log(arrayNames[0])






