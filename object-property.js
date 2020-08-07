const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
]
// const allStdName = [];
//     for( let i = 0; i<students.length; i++){
//         studentName = students[i].name;
//         allStdName.push(studentName)
//     }
//     console.log(allStdName);

const names = students.map( s => s.name);
const bigger = students.filter( s => s.id>40)
const biggerOne = students.find( s => s.id>40)
console.log(biggerOne)
