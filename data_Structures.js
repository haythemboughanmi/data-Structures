//Solutions 1
function sum1(set1, set2) {
    let unionSet = new Set([...set1, ...set2]);
    let sum = 0;
  
    for (let value of unionSet) {
      sum += value;
    }
  
    return sum;
  }
  
  let setA = [1, 2, 3, 4];
  let setB = [3, 4, 5, 6];
  
  console.log(sum1(setA, setB)); 

  //Solutions 2
  function sum2(set1, set2) {
    let unionObj = {};
    let sum = 0;
  
    for (let value of set1) {
      unionObj[value] = value;
    }
  
    for (let value of set2) {
      unionObj[value] = value;
    }
  
    for (let key in unionObj) {
      sum += unionObj[key];
    }
  
    return sum;
  }
  
  let setc = [1, 2, 3, 4];
  let setd = [3, 4, 5, 6];
  
  console.log(sum2(setA, setB)); 