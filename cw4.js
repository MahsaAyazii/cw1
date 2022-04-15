
// Write a Program to Concatenating uneven arrays : (use reduce )
// example :
// data = [
// ["The","red", "horse"],
// ["Plane","over","the","ocean"],
// ["Chocolate","ice","cream","is","awesome"],
// ["this","is","a","long","sentence"]
// ]
// Result :
// ['The red horse',
// 'Plane over the ocean',
// 'Chocolate ice cream is awesome',
// 'this is a long sentence']




// let data = [
//     ["The","red", "horse"],
//     ["Plane","over","the","ocean"],
//     ["Chocolate","ice","cream","is","awesome"], 
//     ["this","is","a","long","sentence"]
//   ]
//  let dataConcat = data.map(item=>item.reduce((a,i)=>`${a} ${i}`))
// console.log (dataConcat)

// function ConcatenatingUnevenArrays(arr) {
//     arr.map(function (item, index) {
//     console.log(`" ${arr[index]}" \n`);
//     })
//     }

function ConcatenatingUnevenArrays(arr) {
    arr.map(function (item, index) {
    const newItem = item.reduce(function(acc,i){
    acc += " "+ i;
    return acc;
    } )
    console.log(newItem);
    })
    }
    ConcatenatingUnevenArrays([
    ["The", "red", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]]);
