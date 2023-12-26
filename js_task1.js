// Random Color

function generateColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const color1 = generateColor();
const color2 = generateColor();
console.log(color1);
console.log(color2);



// Nested array

function method2(a) {
    let result = [];
  
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        result = result.concat(method2(a[i]));
      } else {
        result.push(a[i]);
      }
    }
  
    return result;
  }
  
  const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
  const flattenedArray = method2(nestedArray);
  
  console.log(flattenedArray);


// Remove Duplicates

function method3(b) {
    return [...new Set(b)];
  }
  
  const originalArray = [1, 2, 3, 4, 5, 2, 2, 3];
  const withoutDuplicates = method3(originalArray);
  
  console.log(withoutDuplicates);


//   Count occurrences 


var arr = [ 1, 2, 3, 4, 5, 2, 2, 3];
var counts = {};
for (var i = 0; i < arr.length; i++) {
  var num = arr[i];

  if (counts[num] === undefined) {
    counts[num] = 1;
  } else {
    counts[num]++;
  }
}

console.log(counts);