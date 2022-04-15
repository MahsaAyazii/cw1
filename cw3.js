// Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

// for (let i in a) 
// {
//    console.log("row " + i);
//    for (let j in a[i]) 
//      {
//       console.log(" " + a[i][j]);
//      }
// }

function printArray(arr) {
    arr.map(function(item,index){
    console.log(`"row" ${index}" \n`);
    console.log(`" ${arr[index]}" \n`);
    })
    }
    printArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);