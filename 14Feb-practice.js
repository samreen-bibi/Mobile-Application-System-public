let objArr= [
    {
        name: 'samreen',
        age: 20
    },
    {
        name: 'dua',
        age: 19
    },
    {
        name: 'zainab',
        age: 20
    }
]
function output(data){
    console.log(data.age);
}
let new_arr = objArr.map(output);
console.log(new_arr);
