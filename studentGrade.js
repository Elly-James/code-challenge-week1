//This code returns a user input (Student Marks) to the corresponding grade related to the student marks

//prompt is not available in node.js; therefore the code  should be run in a browser or a site supporting Js where prompt is availabe

let userInput = Number(prompt("Enter Student Marks: ")); //Prompt user for input and convert the string to number

function gradeCalculator(marks){
    if (isNaN(marks)){                   //checks if the grade is not a number
        return "Input a Number";
    }
    if(marks<0 || marks >100){           //checks if the grade we have is below 0 or above 100
        return "Input a valid Grade";
    }
    else if (marks>79 && marks<=100){    //From here if the grade falls between 0-100 it gets graded
        return "A";
    }
    else if (marks>=60 && marks<=79){
        return "B";
    }
    else if (marks>=49 && marks<=59){
        return "C";
    }
    else if (marks>=40 && marks<=49){
        return "D";
    }
    else{
        return "E";
    }

}
console.log(gradeCalculator(userInput));       //we call the function and pass grade as an argument