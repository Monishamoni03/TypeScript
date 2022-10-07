//type should match the element/value
let person: [number, string] = [100, "Hi"];

//object type
let array: [{}, (number | string)[], number[]] = [{
    name: 'Sai'
}, [1, 'a'], [1, 2, 3]]

//accessing position element
let school: [number, string, boolean, number[]] = [100, "Hi", true, [3, 15]];
school[3];
console.log(school);

//eg
let friends: [string, boolean, string[]] = ["Madhu", true, ["Athulai", "Yalhu"]];
console.log(friends, person);