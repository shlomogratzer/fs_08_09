function mission1(num,bool){
    let str = ""
    if(!bool){
        str+="<"
    }
    for(let i = 1; i<=num; i++){
        str += "-"
    }
    if(bool){
        str += ">";
    }
    console.log(str)
}
mission1(5,1)
mission1(3,0)


function mission2(num){
    let max = 0
    let amunt = 0
    let sum = 0
    let fourOrLast = 0
    while(num !== 0){
        switch(num){
            case num > max:{
                max = num
            }
            case amunt < 4:{
                fourOrLast = num
            }
        }
        amunt +=1
        sum += num
    }

}
function mission3(num){
    let s = "*"
    for(let i =1; i <=num; i++){
        console.log(s.repeat(i))
    }
}

mission3(5)
function mission4(num){
    let s = "*"
    for(let i =1; i <=num; num--){
        console.log(s.repeat(num))
    }
}
mission4(6)

function mission5(num){
    const mtx = []
    for(let i = 1; i<=num; i++){
        const array = []
        for(let j = 1; j<=num; j++){
            array.push(j*i)
        }
        mtx.push(array)
    }
    console.log(mtx)
}
mission5(7)


function mission6(num){
    let newnum = 0
    while(num>0){
        newnum *=10
        let int = num%10
        newnum += int
        num /= 10
        num = Math.floor(num)
    }
    console.log(newnum)
}
mission6(12345678)

function mission7(str){
    console.log(str.trim())
}
mission7("")


const list1 = [5,2,3,4]
const list2 = [5,6,7,8]
function mission8(arr1,arr2){
    newList = []
    for(let i = 0; i<arr1.length;i++){
        let item = 1
        for(let j = 0; j<arr1.length; j++){
            if(j !== i){
                item*=arr1[j]
            }
        }
        newList.push(item*arr2[i])
    }
    console.log(newList)
}
mission8(list1,list2)

function mission22(unParNum){
    let num = 1
    if(unParNum === 1){
        console.log(num)
    }
    else{
        for(let i = 0; i<unParNum;i++){
            
        }
    }
}
