// Đây là kiểm tra chẵn lẻ
//  let a = prompt('Enter: ');
// if(a % 2 == 0){
//     console.log(alert( 'đây là số chẵn'));
// }
// else{
//     console.log(alert( 'đây là số lẽ'));
// }
//  kiểm tra nguyên tố
// let a = prompt('Enter: ');
// if(a < 2){
//     console.log(alert ('Đây không phải là số nguyên'));
// }
//     for (var i = 2; i < a; i++)
//     {
//         if (a % i == 0){
//             console.log( alert('Đây không phải là số nguyên'));
//             break;
//     }  
//     else{
//         console.log(alert('Đây là số nguyên'));
//         break;
//     }
//     }
// tìm số bé nhất
const value = prompt('Enter: ');

const newArray = value.split(",");
let min = newArray[0]

for(let i = 0; i < value.split(",").length; i++){
    if(min > Number(newArray[i])){
        min = newArray[i];
    }
}
console.log(min);




