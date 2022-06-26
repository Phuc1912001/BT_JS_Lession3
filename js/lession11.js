var person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
function displayName(person){
    return person.first + person.last
}
console.log(displayName(person))
