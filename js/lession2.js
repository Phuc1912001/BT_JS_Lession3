//Bài 2: Tìm user là male và có tuổi dưới 40
var newArray = fetch("./js/data.json") //em tạo ra 1 hàm để lưu trữ dữ liệu từ data.json
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.filter(function(course) {//em dùng filter để tìm kiếm ạ 
  return course.age < 40 && course.gender ==='Male' ;// cho ràng buộc là age < 40 và genger === 'Male'
}))
console.log(newArray);