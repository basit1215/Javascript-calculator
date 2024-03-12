var firstValue= +prompt("Enter First number");
var secondValue= +prompt("Enter Second value");
var operator= prompt("Enter Operator [Only +, -, *, /, %]");

if(
    operator==="+" ||
    operator==="-" ||
    operator==="*" ||
    operator==="/" ||
    operator==="%"

){
    if(operator==="+"){
        alert("Your answer is " + (firstValue + secondValue));
    }
    else if(operator==="-"){
        alert("Your answer is " + (firstValue - secondValue));
    }
    else if(operator==="*"){
        alert("Your answer is " + (firstValue * secondValue));
    }
    else if(operator==="/"){
        alert("Your answer is " + (firstValue / secondValue));
    }
    else if(operator==="%"){
        alert("Your answer is " + (firstValue % secondValue));
    }
}
else{
    alert("Invalid Operator")
}