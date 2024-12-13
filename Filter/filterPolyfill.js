let arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.filter((ele) => {
//     if (ele < 4) {
//       return ele;
//     }
//   })
// );

Array.prototype.CustomFilter = function (callback) {
    let filteredArr = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)){
        filteredArr.push(this[i])
    }
  }


  return filteredArr
};

console.log(
    arr.CustomFilter((ele) => {
      if (ele < 4) {
        return ele;
      }
    })
  );

  console.log(arr)
