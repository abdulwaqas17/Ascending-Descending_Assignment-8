// // var desire =  [2, 3, 5, 7, 8, 9, 10];
var numbers = [5, 7, 9, 8, 10, 3, 2]; // 2,3,5,7,8,9,10
document.getElementById('top').innerHTML = numbers;

// console.log(numbers);

// ------- For Ascending Order ------------
function ascending() {

    for (var i = 1; i <= numbers.length; i++ ) { // 2 <= 7 | run 7 times

        for (var j = 0; j < numbers.length-1; j++) { // 0 < 6 | run 6 times
    
            if ( numbers[j] > numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box1').innerHTML = numbers;
}

// console.log(numbers); // no change in array 

// ------- For Descending Order ------------
function descending() {

    for (var i = 1; i <= numbers.length; i++ ) { // 2 <= 7 | run 7 times

        for (var j = 0; j < numbers.length-1; j++) { // 0 < 6 | run 6 times
    
            if ( numbers[j] < numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box2').innerHTML = numbers;
}

// console.log(numbers); // only change in the function


// console.log(numbers);

// var desire = [];

// var selected = numbers[0]; //5

// for (var i = 0; i < numbers.length; i++) { // 0 < 9 | run 9 times

//     for (var j = 0; j < numbers.length; j++) { // 8 < 9 | run 9 times

//         // i through out this loop in first times = 0, but j becomes varry because of ++
//         // j means 0,1,2,3,4... and i = round k hisab sy 0 then 1 phir 2,3...
//         // Ye condition 2 aur 1 pr work kr rhi
//         if (numbers[j] < numbers[i]) { //  7 < 1 = T | second round  < 2 | condition true hogi TAB hi code nichay move kry ga

//             // always work | when i = 0
//             if (i == 0) {

//                 // i may is lien store krwye Q k condition i k hisab sy check ho rhi h 
//                 // numbers[i] = numbers[j]; // [0]/numbers[i] = 1  /  2
//                 numbers.unshift(numbers[j]);
                
//                 // if (j == numbers.length-1) { // j = 8 | means last round m
//                 //     document.write(numbers[i]);
//                 //     desire.push(numbers[i]);
//                 // }

//                 // ------- second logic -------
//                 // one = numbers[i]  

//             }

//             if ( i == 1) {

//             //    numbers.unshift(numbers[j]);
//             numbers.splice(1,0,numbers[j]);
            
//             if (i == 1 && j == numbers.length-1)

//             numbers.splice(1,0,numbers[j]);

//             }

//             if ( i == 2) {

//                 numbers.splice(2,0,numbers[j]);
//             }

//             if ( i == 3) {

//                 numbers.splice(3,0,numbers[j])

//             }

//             if ( i == 4 || desire[3] !== undefined) {

//                 numbers.unshift(numbers[j]);
//             }

                   

//          } //else if (j == numbers.length-1 && i == 1){

//         //     document.write(numbers[i]);
//         //     desire.push(numbers[i]);
//         //     numbers.splice(1,1)


//         // }

//         if (j == numbers.length-1 && i == 0) { // j = 8 | means last round m
//             document.write(numbers[i]);

//             desire.push(numbers[i]); // because unshift k zarie sab se chota number sab se phelay A giya

//             numbers.splice( 0,2)
//             numbers.splice( 6,1)
//         }

    
        
//         if (j == numbers.length-1 && i == 1) { // j = 8 | means last round m
//             document.write(numbers[i]); 

//             desire.push(numbers[i]); // because unshift k zarie sab se chota number sab se phelay A giya

//             numbers.splice( 0,2)
//             numbers.splice( 5,1)
//         }

//         if ( j == numbers.length-1 && i == 2) {

//             document.write(numbers[i]);
//             desire.push(numbers[i]);
//             numbers.splice(0,1);
//             numbers.splice(1,1)

//         }

//         if ( j == numbers.length-1 && i == 3) {

//             document.write(numbers[i]);
//             desire.push(numbers[i]);
//             numbers.splice(0,1);
//             numbers.splice(2,1)

//         }




//     }
// }


// for (var i = 0; i < numbers.length; i++) { // 0 < 9 | run 9 times

//     for (var j = 0; j < numbers.length; j++) { 

//         if (numbers[j] < numbers[i]) { // 3 < 5

//             if (i == 0) {

//                 desire.push(numbers[j])

//             }

//             if ( i == 1) {


//             }

//             // if ( i == 2) {

//             //     numbers.splice(2,0,numbers[j]);
//             // }

//             // if ( i == 3) {

//             // }

                   

//          } 

//         // if (j == numbers.length-1 && i == 0) { // j = 8 | means last round m
//         //     document.write(numbers[i]);

//         //     desire.push(numbers[i]); // because unshift k zarie sab se chota number sab se phelay A giya

//         //     numbers.splice( 0,2)
//         //     numbers.splice( 6,1)
//         // }

    
        
//         // if (j == numbers.length-1 && i == 1) { // j = 8 | means last round m
//         //     document.write(numbers[i]); 

//         //     desire.push(numbers[i]); // because unshift k zarie sab se chota number sab se phelay A giya

//         //     numbers.splice( 0,2)
//         //     numbers.splice( 5,1)
//         // }

//         // if ( j == numbers.length-1 && i == 2) {

//         //     document.write(numbers[i]);
//         //     desire.push(numbers[i]);
//         //     numbers.splice(0,1);
//         //     numbers.splice(1,1)

//         // }




//     }
// }

// for (var i = 0; i < numbers.length; i++) {

//     if ( numbers[i] >= numbers[6]) {// 5 >= 2

//         desire.push(numbers[6]);

//     }

//     if ( numbers[6] == 2 && numbers[i] >= numbers[5] && numbers[6] < numbers[5]) {

//         desire.push(numbers[5]);

//     }


   
// }

// var desire =  [2, 3, 5, 7, 8, 9, 10];
// var numbers = [5, 7, 9, 8, 10, 3, 2]; // 5,7,8,9,3,2,10

// document.write('Before', '<br>', numbers)
// console.log(numbers);

// for (var i = 0; i < numbers.length-1; i++) { // 0 < 6 | run 6 times

//     if (numbers[i] > numbers[i + 1]) { // jo chota h wo phelay Ana chahie, Ager second value choti ho to Chaly statement | i=5 10 > 2
        
//         numbers.splice(i,0,numbers[i+1],numbers[i]);

//         numbers.splice(i+2,2); // 2 + 2 = 4

//         console.log(numbers);

//     }

// }

// for (var j = 0; j < numbers.length-1; j++) {

//     if ( numbers[j] > numbers[j + 1] ) {

//         numbers.splice(j,0,numbers[j+1],numbers[j]);

//         numbers.splice(j+2,2); // 2 + 2 = 4

//         console.log(numbers);
//     }
// }

// for (var k = 0; k < numbers.length-1; k++) {

//     if ( numbers[k] > numbers[k + 1] ) {

//         numbers.splice(k,0,numbers[k+1],numbers[k]);

//         numbers.splice(k+2,2); // 2 + 2 = 4

//         console.log(numbers);
//     }
// }

// for (var l = 0; l < numbers.length-1; l++) {

//     if ( numbers[l] > numbers[l + 1] ) {

//         numbers.splice(l,0,numbers[l+1],numbers[l]);

//         numbers.splice(l+2,2); // 2 + 2 = 4

//         console.log(numbers);
//     }
// }

// for (var m = 0; m < numbers.length-1; m++) {

//     if ( numbers[m] > numbers[m + 1] ) {

//         numbers.splice(m,0,numbers[m+1],numbers[m]);

//         numbers.splice(m+2,2); // 2 + 2 = 4

//         console.log(numbers);
//     }
// }

// for (var n = 0; n < numbers.length-1; n++) {

//     if ( numbers[n] > numbers[n + 1] ) {

//         numbers.splice(n,0,numbers[n+1],numbers[n]);

//         numbers.splice(n+2,2); // 2 + 2 = 4

//         console.log(numbers);
//     }
// }

// console.log(numbers); // i,j,k,l,m,n =    
// document.write('<br>', '<br>','After','<br>',numbers)
