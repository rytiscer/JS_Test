/* ------------------------------ TASK 5 -----------------------------------
Turimas "employee" objektas.

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getEmployeeFullName" - priims "employee" objektą ir grąžins darbuotojo
pilną vardą (vardas ir pavardė kartu).
2. funkcija "updateEmployeeSalary" - priims "employee" objektą ir naują atlyginimą,
atnaujins atlyginimą objekte ir grąžins atnaujintą objektą.
-------------------------------------------------------------------------- */

const employee = {
  firstName: "John",
  lastName: "Doe",
  position: "Software Developer",
  salary: 5000,
};

const getEmployeeFullName = (employee) => {
  return `${employee.firstName} ${employee.lastName}`;
};

const updateEmployeeSalary = (employee, newSalary) => {
  const updatedEmployee = { ...employee, salary: newSalary };
  return updatedEmployee;
};

console.log(getEmployeeFullName(employee)); // Rezultatas: 'John Doe'
console.log(updateEmployeeSalary(employee, 8000)); // Rezultatas: employee object with updated salary
