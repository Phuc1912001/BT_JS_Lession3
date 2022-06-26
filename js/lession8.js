
// + Lấy mảng gồm tất cả names
// + Lấy mảng gồm tất cả height
// + Tìm những người có height lớn hơn  100
// + Tìm những người có mass lớn hơn 100
// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//Lấy mảng gồm tất cả names
const newName = []
var result = characters.forEach(function(course,index,array) {
    newName.push(course.name ) 
})
console.log(newName)

//Lấy mảng gồm tất cả height
const newHeight = []
var resultTwo = characters.forEach(function(course){
    newHeight.push(course.height)
})
console.log(newHeight)

//Lấy ra mảng gồm tất cả mass
const newMass = []
var resultTwo = characters.forEach(function(course){
    newMass.push(course.height)
})
console.log(newMass)

//tìm những người có height lớn hơn  100
let findUser = characters.filter(function(course) {
        return course.height > 100;
    });
console.log(findUser); 

//Tìm những người có mass lớn hơn 100
let findUserTwo = characters.filter(function(course) {
    return course.mass > 100;
});
console.log(findUserTwo); 

//Sắp xếp mảng theo name, mass, hieght, giới tính (gender)
function action(course) {
    return {
        name: course.name,
        mass: course.mass,
        height: course.height,
        gender: course.gender
    }
}
var newArray = characters.map(action);
console.log(newArray)

