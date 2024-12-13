let arr = [1,2,3,4,5]

const add5each = (ele) => {
    console.log(ele+5)
}

// const res1 = arr.forEach(add5each)
// console.log(res1)

// const res2 = arr.forEach((ele)=> console.log(`this is ${ele}`))
// console.log(res2)

Array.prototype.CustomForEach = function(callback){
    for(let i =0 ; i< this.length ; i++){
        callback(this[i] , i  , this)
    }
}


let data = arr.CustomForEach(add5each)
console.log(data)