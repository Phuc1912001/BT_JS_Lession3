//bài 4 Sử dụng map để chuyển đổi key của object thành camelCase (quy tắc lạc đà )


const newresult = fetch("./js/data.json")//em khai báo 1 mảng để lưu trữ kết quả 
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.map(function(arr) {
    var obj = Object.keys(arr)// khai báo biến keys cho object
    var newString = obj.toString()//em phải chuyển dạng từ Object sang String để yếu tố camelCase có thể thực hiện
    return newString.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {// đoạn này em lấy trên mạng nên k hiểu mấy ạ haha
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    
  }))
console.log(newresult)


// cách này là em dùng cho mảng thông thường ạ 
// var newArray = arr.map(function(arr) {
//   var obj = Object.keys(arr)
//   var newString = obj.toString()
//   return newString.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
//     return index === 0 ? word.toLowerCase() : word.toUpperCase();
//   }).replace(/\s+/g, '');
// })
// console.log(newArray)