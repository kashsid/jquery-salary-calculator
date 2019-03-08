$(document).ready(docReady);

function docReady(){

    $('#calcBtn').on('click', addEmployee);

}
/*
Class Employees
*/
class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    } //end constructor
} // end Employee class


let employees = []; // initialize array to hold cars
/*
Function mae: newCar
* Parameters : year,make, model, imageUrl
* Returns: Boolean
* Process: the function newCar creates a new car and
* and pushes that into an array "garage"

*/
function addEmployee(firstName, lastName, id, title, annualSalary) {
    console.log( 'in addEmployee:',firstName, lastName, id, title, annualSalary );
    //let result = isValid(); // Calling isValid function and storing the result into variable "result"

    //if (result == true) {
        //console.log('validated');
    let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(), $('#id').val(), $('#title').val(), $('#annualSal').val());
        employees.push(newEmployee);
        console.log(employees);
        
        //garage.push( new Car( $('#year').val(), $('#make').val(), $('#model').val()));
        //disableControls();  // Calling function to disable controls
       // emptyText();
        updateSalaryTable();
        //totalMonthly();
        return true;
   // }//end if
} // end newCard

function updateSalaryTable(){
    console.log('in updateSalary Function');
    let totalSalary=0;
    let outputTable= $('.employeeTable');
    outputTable.empty();
    outputTable.append(`<tr><td>First Name</td><td>Last Name</td><td>ID</td><td>Title</td><td>Annual Salary</td></tr>`)
    for (newEmployee of employees){
       
        outputTable.append(`<tr><td> ${newEmployee.firstName} </td> <td>${newEmployee.lastName}</td><td> ${newEmployee.id}</td><td> ${newEmployee.title}</td><td> ${newEmployee.annualSalary} </td></tr>`);
        totalSalary = totalSalary + (newEmployee.annualSalary/12);
        console.log(totalSalary);
        
    } // end for of
    
}// end updateSalaryTable
