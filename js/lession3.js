//Bài 3: Làm giống bài 1 nhưng sử dụng map
const newresult = []
fetch("./js/data.json")
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.map(function(course,index,array) {//em thay mỗi forEach bằng map ạ 
  newresult.push(course.first_name +' '+ course.last_name) 
}));
console.log(newresult);