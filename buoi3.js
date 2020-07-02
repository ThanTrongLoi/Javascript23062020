//15: hàm filter 
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newArrayNumbers = arrayNumbers.filter(function(value){
//     if(value % 2 == 0) return true 
//     return false
//     //false không đưa vào mảng mới
//     //true đưa vào
// })
// console.log(newArrayNumbers)

//Ví du
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
// 	return array.find(function(value){
//         if(value % 2 == 0) return true
//         return false
//     })
// }
// console.log(findFirstEvenNumber([1,2,3,4,5,6,7,8,9,10]))

//Ví dụ:
/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

// function findDivisibleNum(array, x) {
//   // viết code ở đây.
//   return array.find(function(value){
//       if(value % x == 0) return true
//       return false
//   })
// }
// console.log(findDivisibleNum([8, 3, 4], 2))

//16: reduce
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const total = arrayNumbers.reduce(function(accumulator, currentValue){
//     console.log("Accumulator: " + accumulator + " CurrentValue: " + currentValue)
//     return accumulator + currentValue
// },0)


// Vi du
// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     return arr.reduce(function(accumulator, currentValue){
//         if(currentValue.voted){
//             accumulator ++ 
//         }
//         return accumulator
//     },0)
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7
// console.log(totalVotes(voters))

//Ví dụ:

function countOccurrences(arr) {
    return arr.reduce(function(accumulator, currentValue){
        // if(currentValue in accumulator)
        if(currentValue in accumulator){
            accumulator[currentValue]++
        }else{
            accumulator[currentValue] = 1
        }
        return accumulator
    },{})
}
countOccurrences(["a", "b", "c", "b", "a", "a"]);
// {"a": 3, "b": 2, "c": 1}
console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));

