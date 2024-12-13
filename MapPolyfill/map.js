let arr = [4,5,6,3,7]



Array.prototype.CustomeMap = function(callback){
    let arr1 = []
    for(let i =0 ; i<this.length; i++){
        arr1.push(callback(this[i] , i , this.length))
    }
    return arr
}

let resp = arr.CustomeMap((ele)=> {console.log(ele)})
console.log(resp)