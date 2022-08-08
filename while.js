/*
1. Loop variable
2. Loop condition
3. Loop body
4. Change the Loop variable
5. use ctrl + c to stop a infinite loop
6. If condition diye break ebong contunue chalaite hoy
*/
// var roastGiven = 0;
// while (roastGiven <= 7){
//     console.log(roastGiven);
//     console.log("Roast Dan");
//     roastGiven++;
// }
// number
// var number = 1;
// while (number<=10){
//     console.log(number);
//     number++;
// }
// even
// var numberEven = 0;
// while (numberEven<=20){
//     console.log(numberEven);
//     numberEven += 2;
// }
// odd
// var numberOdd = 1;
// while (numberOdd<=20){
//     console.log(numberOdd);
//     numberOdd += 2;
// }

// find odd number between 25 to 30
for (let i = 1; i <= 30; i +=2){
    if (i < 25){
        continue;
    }
    console.log(i);
}


// For loop in an array
// let age = [18, 20, 14, 25, 30, 45];
// for (let i=0; i<age.length; i++){
//     let separetAge = age[i];
//     console.log(separetAge);
// }
// For looper break ebong continue
// let age = [18, 50, 14, 25, 15, 45];
// for(let i = 0; i < age.length; i++){
//     let olderAge = age [i];
//     if(olderAge > 20){
//         continue;
//     }
//     console.log(olderAge);
// }
// for(let i = 0; i < age.length; i++){
//     let olderAge1 = age [i];
//     if(olderAge1 > 20){
//         break;
//     }
//     console.log(olderAge1);
// }