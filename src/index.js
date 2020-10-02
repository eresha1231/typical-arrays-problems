const sortArr = (arr) => {  
  return arr.slice().sort((a, b) => a - b)
}

exports.min = function min (array) {
 return (Array.isArray(array) && array.length) ? sortArr(array)[0] : 0;
}

exports.max = function max (array) { 
  return (Array.isArray(array) && array.length) ? sortArr(array)[array.length - 1] : 0;
}

exports.avg = function avg (array) {
  return (Array.isArray(array) && array.length) ? array.reduce((sum, current) => sum + current) / array.length : 0;
}
