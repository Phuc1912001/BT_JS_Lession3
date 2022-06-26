var arr = [
    {
        "id": 1,
        "first_name": "Eamon",
        "last_name": "Harhoff",
        "email": "eharhoff0@imageshack.us",
        "gender": "Male",
        "age": 40,
        "salary": 18888
      },
      {
        "id": 2,
        "first_name": "Laney",
        "last_name": "Whittam",
        "email": "lwhittam1@issuu.com",
        "gender": "Female",
        "age": 42,
        "salary": 15018
      },
      {
        "id": 3,
        "first_name": "Lynett",
        "last_name": "Twinberrow",
        "email": "ltwinberrow2@gov.uk",
        "gender": "Female",
        "age": 99,
        "salary": 13343
      },
      {
        "id": 4,
        "first_name": "Madella",
        "last_name": "Kliesl",
        "email": "mkliesl3@ft.com",
        "gender": "Male",
        "age": 39,
        "salary": 5248,
      },
]
// destructring
var newArray = arr.map(function(course) {
     const  {id,first_name,last_name,...str} = course
     
     console.log(id,first_name,last_name,str.email,str.gender)
})

//b1 in ra first name, last name 
const newresult = []
fetch("./js/data.json")
.then(response => {
   return response.json();
})
.then(jsondata => jsondata.forEach(function(course,index,array) {
  newresult.push(course.first_name +' '+ course.last_name) 
}));
console.log(newresult);
















