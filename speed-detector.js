// This code prompts the user for an input of the car speed and converts it to string
// If the speed is equal of less than 70 then the speed is okay
// Any speed above 70 the license gets suspended
// For any other input, the user should input a valid speed

let userInput = parseInt(prompt("Enter the Car Speed: "), 10); // Prompt user for input and convert the string to number where 10 specifies the to base 10


function speedDetector(speed){

    if (isNaN(speed) || speed<0){       //checks if the speed is not a number and if it is less the 0
        return "Input a valid Speed";
    }
    else if (speed <= 70) {
    return "Ok"; // Single output for numbers <= 10
    } 
    else {
        let points = Math.floor((speed - 70) / 5); // Calculates the demerit points by taking the speed from the user input minus 70 the required speed,
                                                   // and devides the speed by 5 to get the points, e.g 10/5= 2 points and math floor rounds down the quotient
        
        if (points >= 12) {
            return "License Suspended"; // License is suspended for 12 or any exceeding points
        } 
        else {
            return `Demerit Points: ${points}`; // Returns points if less than 12
        }
    }
}

console.log(speedDetector(userInput)); // Calling the function and passing userInput as argument