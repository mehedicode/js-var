// // task 1 //
// var burger = 550;

// // if(burger > 500){
// //     console.log("coke is free")
// // }
// // else {
// //     console.log("coke is 30")
// // }

// console.log(burger > 500 ? "coke is free" : 'coke is 30')


// task 02

var weight = 60;
var height = 1.7;
var bmi = weight / (height * height);

if (bmi < 18.5){
    console.log("You are underweight")
}

else {
    if (bmi >= 18.5 && bmi <= 24.9){
        console.log('you are normal')
    }
    else{
        if(bmi >= 25 && bmi <= 29.9){
            console.log('you are overweight')
        }
        else{console.log('you are abese')}
    }
}