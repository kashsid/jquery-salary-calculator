$(document).ready(docReady);

function docReady() {

    $('#calcBtn').on('click', addEmployee);
    $('.employeeTable').on('click','.removeEmployeeButton',removeEmployee)
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
    console.log('in addEmployee:', firstName, lastName, id, title, annualSalary);
    //let result = isValid(); // Calling isValid function and storing the result into variable "result"

    //if (result == true) {
    //console.log('validated');
    let newEmployee = new Employee($('#firstName').val(),
        $('#lastName').val(),
        $('#id').val(),
        $('#title').val(),
        $('#annualSal').val());

    employees.push(newEmployee);
    console.log(employees);

    //disableControls();  // Calling function to disable controls
    // emptyText();
    displaySalaryTable();
    //totalMonthly();
    return true;
    // }//end if
} // end newCard

function displaySalaryTable() {
    console.log('in updateSalary Function');
    let totalSalary = 0;
    let outputTable = $('.employeeTable');
    outputTable.empty();
    outputTable.append(`<tr><td><strong>First Name</strong></td>
                        <td><strong>Last Name</strong></td>
                        <td><strong>ID</strong></td>
                        <td><strong>Title</strong></td>
                        <td><strong>Annual Salary</strong>
                        <td><strong>Remove Employee?</strong>
                        </td></tr>`)
    for (newEmployee of employees) {
        outputTable.append(`<tr><td> ${newEmployee.firstName} </td> 
                            <td>${newEmployee.lastName}</td>
                            <td> ${newEmployee.id}</td>
                            <td> ${newEmployee.title}</td>
                            <td> $${Number(newEmployee.annualSalary).toFixed(2)} </td>
                            <td> <button class="removeEmployeeButton">Remove</button></td></tr>`);

        totalSalary = totalSalary + (newEmployee.annualSalary / 12);
        
        $('#monthlySalary').empty();

        $('#monthlySalary').append(totalSalary.toFixed(2));

        if (totalSalary>= 20000){
            console.log('this is 20K');
            $('#monthlySalary').toggleClass('Salary'); 
        } // check monthly salary
    } // end for of
    console.log(totalSalary);
}// end displaySalaryTable

function removeEmployee(){
    let currentRow = $(this).closest("tr"); 
    let col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    let col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    let col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
    
    console.log(col1,col2,col3);
    console.log(col1.trim(),col2.trim(),col3.trim());
    
    
   // var data = col1 + "\n" + col2 + "\n" + col3;
   for (let i=0; i < employees.length; i++){
       let fname=employees[i].firstName;
       let lname=employees[i].lastName;
       let empId=employees[i].id;
       ˇ
       if (fname == col1.trim()){
            employees.splice(i,1);
           
            
       }
   }

   // alert(data);
   // console.log('current row is ',currentRow);
    
//var texto = $('table tr:nth-child',(currentRow),'td:nth-child(1)').text()
    //var texto = $('.etable').find("tr:eq(2)").find("td:eq(1)").html();
    //console.log(texto);
    $(this).parent().parent().fadeOut(400);
   
       



    
}// end removeEmployee function
