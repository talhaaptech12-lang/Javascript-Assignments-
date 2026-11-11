
// Question No. 1

// var userCity= prompt("Enter your City Name")

// if(userCity == "karachi"){
//     console.log("welcome to Karachi")
// }


// question No. 2
// var userGender = prompt("Enter your Gender")

// if (userGender == "male"){
//     console.log("Good Morning Sir")
// }
// else if(userGender == "female"){
// console.log("Good Morning Ma'am")
// }


// Question No. 3

// var signalLisght= prompt("Inform about Signal Light")

// if(signalLisght == "red"){
//     console.log("must Stop")
// }else if(signalLisght == "yellow"){
//     console.log("ready to move")
// }else{
//     console.log("Monve now")
// }

// Question No. 4

// var userFuel = prompt("Enter your Fuel quantity in litres")

// if(userFuel == "0.25 litres"){
//         console.log("Please refill the fuel in your car")
// }else{
//     console.log("You can go fuel is sufficient")
// }

// Question No. 5

// var a = 4

// if(++a === 5){
//     alert("given condition for variable is true")
// }

// var b = 82;

// if(b++ === 83){
//     alert("given condition for variable is true")
// }


// var c = 12;

// if(c++ === 13){
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }if(++c < 14){
//     alert("condition 3 is true")
// }
// if(c === 14){
//     alert("condition 4 is true")
// }

// var materialCost = 2000;
// var laborCost= 1000;
// var totalCost = materialCost + laborCost;

// if(totalCost === laborCost + materialCost){
//     alert("The cost Equal")
// }


// Question No. 6

var subject1 = Number(prompt("Enter your Number"))
var subject2 = Number(prompt("Enter your Number"))
var subject3 = Number(prompt("Enter your Number"))

var totalMarks = 300;
var marksObtained = subject1 + subject2 + subject3;
var percentage = marksObtained / totalMarks * 100;


console.log(totalMarks)
console.log(marksObtained)
console.log(percentage)


if (percentage >= 80) {
    console.log("Grade A+")
}else if(percentage >= 70){
    console.log("Grade A")
}else if(percentage >= 60){
    console.log("Grade B")
}else{
    console.log("Fail")
}



