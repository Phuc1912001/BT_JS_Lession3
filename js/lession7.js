//bài 7 sắp xếp theo firstName và salary 
//sắp sếp theo Salary 
// sắp sếp theo mảng thông thường thì em vẫn sắp sếp dk ạ 
// arr là một mảng em tự tạo ạ 
const newArray = []//tạo ra 1 mảng trống 
var arrSalary = arr.forEach(function(course) {//em dùng foreach để lấy ra các Salary
    newArray.push(course.salary)//sau đó em đẩy vào mảng newArray
})
newArray.sort(function(a, b) {//em dùng sort để sắp sếp theo thứ tự tăng dần
    if (a > b) return 1; 
    if (a < b) return -1;
    return 0;
});
// In ra kết quả sau khi sắp xếp
console.log(newArray);


//BÀI CHÍNH 
// ở đây em đã lấy ra được một mảng bao gồm nhiều object em k biết cách sắp sếp ạ :))
const newSalary= []
fetch("./js/data.json")
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.forEach(function(course) {
    newSalary.push(course.salary)
  }))
// console.log( newSalary); kết quả là 1 mảng bao gồm nhiều obj 
var array = newSalary.map(function(course,index) {
    return newSalary[index].sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
})
console.log(array)// k có lỗi nhưng cũng không có kết quả ạ 




 // sắp xếp theo first_Name
// const newFirstName = [] // em làm tương tự trên ạ 
// var arrSalary = arr.forEach(function(course) {
//   newFirstName.push(course.first_name)
// })
// newFirstName.sort(function(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

// console.log(newFirstName)


// BÀI CHÍNH 
const newFirstName= []
fetch("./js/data.json")
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.forEach(function(course) {
    newFirstName.push(course.salary)
  }))
// console.log( newSalary); kết quả là 1 mảng bao gồm nhiều obj 
var arrayTwo = newFirstName.map(function(course,index) {
    return newFirstName[index].sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
})
console.log(arrayTwo)




