//This code calculates an employee of Kenya Net Salary after Paye, NHIF and NSSF Deductions.

// Prompt user for input and validate it checking is it is a number.
function getValidNumber(promptMessage) {
    let value;
    do {
        value = Number(prompt(promptMessage));
        if (isNaN(value)) {                                            //this checks if the value is not a number if its true
            console.log("Invalid input. Please enter a valid number."); 
        }
    } while (isNaN(value)); // while if the value is not a number is false it gives us the value
    return value;
}

//We call the function and pass the getValidNumber as argument using the intended message to give the user

let basicSalary = getValidNumber("Enter your basic salary:"); // this will be the first message the user will see on screen
let benefits = getValidNumber("Enter your benefits:");
let grossSalary = basicSalary + benefits;

console.log(`Your gross salary is: ${grossSalary} Ksh`);   //prints out the gross Salary

// NHIF Calculation

//Here we have created an array containing objects of the maximum grossSalary of an employee and the respective deductions


function calculateNhif(grossSalary) {
    const nhifRates = [
        { max: 5999, deduction: 150 },
        { max: 7999, deduction: 300 },
        { max: 11999, deduction: 400 },
        { max: 14999, deduction: 500 },
        { max: 19999, deduction: 600 },
        { max: 24999, deduction: 750 },
        { max: 29999, deduction: 850 },
        { max: 34999, deduction: 900 },
        { max: 39999, deduction: 950 },
        { max: 44999, deduction: 1000 },
        { max: 49999, deduction: 1100 },
        { max: 59999, deduction: 1200 },
        { max: 69999, deduction: 1300 },
        { max: 79999, deduction: 1400 },
        { max: 89999, deduction: 1500 },
        { max: 99999, deduction: 1600 },
        { max: Infinity, deduction: 1700 },  // Here for any value above 99999, the deductions are fixed upto infinity value
    ];

    for (let rate of nhifRates) {            //This loop iterates through each rate object in the nhifRates array.
        if (grossSalary <= rate.max) {        // For each rate, it checks whether the grossSalary falls within the current range.
            return grossSalary - rate.deduction;       //  // The check ensures that the first matching range is selected 
        }                                               //(the ranges are ordered from smallest to largest in the nhifRates array).
    }
}

// PAYE Calculation
function calculatePaye(grossSalary) {  //This function calculates the amount of paye an employee pays for the grosssalary category
                                        //This function ensures that the grosssalary is checked in all the categories it applys to
    
        let tax = 0; // Initializing tax to 0

    
        if (grossSalary > 800000) {
            tax += (grossSalary - 800000) * 0.35; // Tax for above 800,000
            grossSalary = 800000;
        }
        if (grossSalary > 500000) {
            tax += (grossSalary - 500000) * 0.325; // Tax for 500,001 to 800,000
            grossSalary = 500000;
        }
        if (grossSalary > 32333) {
            tax += (grossSalary - 32333) * 0.30; // Tax for 32,334 to 500,000
            grossSalary = 32333;
        }
        if (grossSalary > 24000) {
            tax += (grossSalary - 24000) * 0.25; // Tax for 24,001 to 32,333
            grossSalary = 24000;
        }
        if (grossSalary > 0) {
            tax += grossSalary * 0.10; // Tax for up to 24,000
        }
    
        return Math.floor(tax); //Rounds down the result to remove any decimals
    
    
}


// NSSF Calculation
    function calculateNssf(grossSalary) {
    let tier1Limit = 7000; // Tier I limit
    let tier2Limit = 36000; // Tier II upper limit
    let employeeContribution = 0; // Employee's contribution
    let employerContribution = 0; // Employer's contribution

    if (grossSalary <= tier1Limit) {
        // Only Tier I applies
        employeeContribution = grossSalary * 0.06; // 6% of grossSalary
        employerContribution = employeeContribution; // Employer and employee contribution gives the same amount
    } else if (grossSalary > tier1Limit && grossSalary <= tier2Limit) {
        // Both Tier I and Tier II apply
        let tier1Contribution = tier1Limit * 0.06; // 6% of 7,000
        let tier2Contribution = (grossSalary - tier1Limit) * 0.06; // 6% of the remaining salary within Tier II
        employeeContribution = tier1Contribution + tier2Contribution;
        employerContribution = employeeContribution; // Employer matches employee contribution
    } else {
        // Salary exceeds Tier II upper limit
        let tier1Contribution = tier1Limit * 0.06; // 6% of 7,000
        let tier2Contribution = (tier2Limit - tier1Limit) * 0.06; // 6% of the maximum Tier II salary (36,000 - 7,000)
        employeeContribution = tier1Contribution + tier2Contribution;
        employerContribution = employeeContribution; // Employer matches employee contribution
    }

    let totalNssfDeductions = employeeContribution + employerContribution; // Total contributions
    
    return totalNssfDeductions;
}


// Calculating deductions
const grossAfterNhif = calculateNhif(grossSalary);
const totalPayeDeduction = calculatePaye(grossSalary);
const nssfDeductions = calculateNssf(grossSalary);

const nhifDeductions = grossSalary - grossAfterNhif;
const netSalary = grossAfterNhif - totalPayeDeduction - nssfDeductions;

// Displays deductions and net salary
console.log(`Your NHIF Deductions are: ${nhifDeductions} Ksh`);
console.log(`Your PAYE Deduction is: ${totalPayeDeduction} Ksh`);
console.log(`Your NSSF Deduction is: ${nssfDeductions} Ksh`);
console.log(`Your Net Salary is: ${netSalary} Ksh`);
