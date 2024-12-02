#  Fundamental Basics of Learning Java-Script
Mastering the fundamental concepts of JavaScript is essential for building a strong foundation in the language.
The programs below focus on key areas that are crucial for understanding and advancing in JavaScript development.

## Student Grade Calculator
1. This program calculates the grades of a student by first prompting the user for an input.
2. According to whatever input the user has given, the program converts the input into a number, since prompt renders inputs as strings. If the user gives any value that is not a number, the user gets an output   **Input a number**,  if the number is above 100 and below zero then **Input a valid grade**.
3. Next, the programs checks the marks of the student and issues grade as follows.
4. For marks A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

## Speed Detector
1. This program checks a given car speed by first prompting the user for an input
2. If the user gives an input, it is passed as an integer to base 10, then the program checks if the given input is not a number or is below 0, if it is true then the user gets **Input a valid speed**.
3. If the input is a number, the program detects the speed as follows.
4. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
5.  If the driver gets more than 12 points, the program prints: *License suspended*.
   
## Net Salary Calculator
This program calculates an employee's net Salary by using the Kenyan Tax Revenue Authority calculation formula. The formula only focuses on KRA, NHIF, and NSSF values for calculation.

   #### Terms to know
   
 * **Basic Salary**- the salary paid to an employee before any additions or reductions to the overall compensation.
     * **Gross Salary**- the total pay an employee receives before any deductions are made.
     * **Net Salary**- the amount of money an employee receives after deductions are taken from their gross pay.
     * **KRA**- Kenyan Revenue Authority.
     * **NHIF**- National Health Insurance Fund.
     * **NSSF**- National Social Security Fund.
  
  1. The program prompts the user for their basic salary and benefits
  2. Then the program adds the basic salary with the benefits to get the gross salary of the user.
   
  3. Then first the program deducts NHIF from the gross salary according to the category of the user gross salary e.g from 0-5999 the program deducts 150 and above 99999 the program deducts 1700.
  4. The NHIF deductions are fixed as stipulated in [click here](https://www.aren.co.ke/payroll/taxrates.htm) and the program returns the salary minus the NHIF deductions.
  5. Next the program calculates the PAYE deductions *pay as you earn*, where the the deductions are based accordint to the employee's category. e,g for a gross salary of upto 24000 the deduction is 10% and above 800000 the deductions are 35%. Here it returns the total paye deductions
  6. Next the program calculates the NSSF according to the given gross Salary of the employee.
  7. Contributions to NSSF are divided into Tier I and Tier II. The employer and employee each contribute 6% of pensionable pay, subject to the following monthly limits.
      
      * **Tier 1** upto 7000
      * **Tier 2** upto 36000
      * 
  Now if an employee earn 7000, it will only fall under the tier 1 and the 6% of it will be deducted to NSSF. For a person earning 40,000. Both the tiers will be calculated tier 1 7000 and tier 2 for 29,000. Since we only want a range of 0-36,000.

  8. The program finaly gives all deductions and takes the gross salary minus all the deductions and provides the net salary for the user.

## Prerequisites

Node JS install in your machine

git clone ````git clone <SSH KEY>````

Run each file in node js supported compiler that has prompt build in ```JS fiddle``` [click here](https://jsfiddle.net/) ``Copy paste each file in to the JS of fiddle then click run``

Testing the code on node js each file ``node studentGrade.js``

### Author: Elly James Komunga
Incase you are stuck or experiencing any error, reach me via ellyjames1999@gmail.com

### Licence 
I have used MIT licence




