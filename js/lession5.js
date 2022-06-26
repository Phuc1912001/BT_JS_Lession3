
// //bài 5 dùng reduce 
// //reduce b1 
// console.log(arr.reduce((preValue, currentValue) => {
//     return preValue +  currentValue.first_name + ' ' + currentValue.last_name
// },[]))

// // reduce b2
var newArray = fetch("./js/data.json") //em tạo ra 1 hàm để lưu trữ dữ liệu từ data.json
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.reduce(function(preValue,currentValue) {//em dùng filter để tìm kiếm ạ 
  if(currentValue.age < 40 && currentValue.gender ==='Male'){
    return preValue.age
  }  // cho ràng buộc là age < 40 và genger === 'Male'
}))
console.log(newArray);

//reduce b4
// const newresult = fetch("./js/data.json")//em khai báo 1 mảng để lưu trữ kết quả 
// .then(response => {
//    return response.json();
// })
// .then(jsondata => jsondata.reduce(function(arr) {
//     var obj = Object.keys(arr)// khai báo biến keys cho object
//     var newString = obj.toString()//em phải chuyển dạng từ Object sang String để yếu tố camelCase có thể thực hiện
//     return newString.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {// đoạn này em lấy trên mạng nên k hiểu mấy ạ haha
//     return index === 0 ? word.toLowerCase() : word.toUpperCase();
//     }).replace(/\s+/g, '');
    
//   }))
// console.log(newresult)