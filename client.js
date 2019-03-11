$(document).ready(docReady);

function docReady() {

    $('#calcBtn').on('click', addEmployee);
    $('.employeeTable').on('click', '.removeEmployeeButton', removeEmployee)
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
Function mae: addEmployee
* Parameters : yirstName, lastName, id, title, annualSalary
* Returns: Boolean
* Process: the function creates a new employee and
* and pushes that into an array "employees"

*/
function addEmployee(firstName, lastName, id, title, annualSalary) {

    let result = isValid(); // Calling isValid function and storing the result into variable "result"

    if (result == true) {

        let newEmployee = new Employee($('#firstName').val(),
            $('#lastName').val(),
            $('#id').val(),
            $('#title').val(),
            $('#annualSal').val());

        employees.push(newEmployee);
        clearForm();
        displaySalaryTable();

        return true;
    } //end if
} // end newCard

// Update employee salary table on DOM
function displaySalaryTable() {

    let totalMonthlySalary = 0;
    let outputTable = $('.employeeTable');

    outputTable.empty();

    outputTable.append(`<tr><td><strong>First Name</strong></td>
                        <td><strong>Last Name</strong></td>
                        <td><strong>ID</strong></td>
                        <td><strong>Title</strong></td>
                        <td><strong>Annual Salary</strong>
                        <td><strong>Remove Employee?</strong></td>
                        </tr>
                        <h2 id="totalMonthly">Total Monthly: $<span id="monthlySalary">0.00</span></h2>`)



    for (newEmployee of employees) {
        outputTable.append(`<tr><td> ${newEmployee.firstName} </td> 
                            <td>${newEmployee.lastName}</td>
                            <td> ${newEmployee.id}</td>
                            <td> ${newEmployee.title}</td>
                            <td> $${Number(newEmployee.annualSalary).toFixed(2)} </td>
                            <td> <button class="removeEmployeeButton">Remove</button></td></tr>`);

        totalMonthlySalary = totalMonthlySalary + (newEmployee.annualSalary / 12);
       
    }//end for of  


    $('#monthlySalary').empty();

    $('#monthlySalary').append(totalMonthlySalary.toFixed(2));

    if (totalMonthlySalary > 20000) {
        // $('#monthlySalary').toggleClass('maxSalary');
        $("#totalMonthly span").css("background-color", "red");
    } // end check toggleClass
    else if (totalMonthlySalary < 20000) {
        $("#totalMonthly span").css("background-color", "#eee");
    }

}// end displaySalaryTable
// Remove employee on click of button
function removeEmployee() {

    let currentRow = $(this).closest("tr");
    let col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    let col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    let col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD


    for (let i = 0; i < employees.length; i++) {
        let fname = employees[i].firstName;
        let lname = employees[i].lastName;
        let empid = employees[i].id;
        if (fname == col1.trim() && lname == col2.trim() && empid == col3.trim()) {
            $(this).parent().parent().fadeOut(600);

            employees.splice(i, 1);

            if (employees == undefined || employees.length == 0) {
                location.reload();
            }

            displaySalaryTable();
        }
    } //End for loop
} // end removeEmployee 
// Function to clear the text fields after the data is entered.
function clearForm() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSal').val('');
}// end clearForm

// function to chaeck if all fields are filled in.

function isValid() {
    
    if ($('#firstName').val() == '') {
        alert("Please enter first name");
        return false;
    }
    else if ($('#lastName').val() == '') {
        alert("Please enter last name");
        return false;
    }
    else if ($('#id').val() == '') {
        alert("Please enter employee id");
        return false;
    }
    else if ($('#title').val() == '') {
        alert("Please enter employee title");
        return false;
    }

    else if ($('#annualSal').val() == '') {
        alert("Please enter employee annual salary");
        return false;
    }
    return true;
}// End isValid



