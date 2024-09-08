// const numbers = [2,3,5,6,9];

function mission1(){
    const numbers = [2,3,5,6,9];
let sum = 0
let multply = 1
numbers.forEach((element) => {
    sum += element
    multply *= element
});
console.log(sum)
console.log(multply)
console.log(sum/numbers.length)
}
function mission2(){
    const numbers = [2,3,5,6,9];
const newArray = []
newArray.push(numbers[numbers.length-1])
for(let i=1; i < numbers.length-1 ; i++){
    newArray.push(numbers[i])
}
newArray.push(numbers[0])
console.log(newArray)
}
function mission3(){
    const numbers = [2,3,5,6,9];
    const newArray = numbers
    console.log(newArray)
    const newArrayRevers = []
    const newArrayPar = []
    for(let i = numbers.length; i > 0; i--){
        newArrayRevers.push(numbers[i-1])
    }
    console.log(newArrayRevers)
    numbers.forEach(i => {
        if(i % 2 === 0){
            newArrayPar.push(i)
        }
    }
    )
    console.log(newArrayPar)
}
mission1()
mission2()
mission3()