// Employee Data Structure

let employees = [
    { id: 1, name: "Arjun", position: "Developer", salary: 40000, department: "IT", available: true },
    { id: 2, name: "Meena", position: "Designer", salary: 35000, department: "Design", available: true },
    { id: 3, name: "Rahul", position: "HR", salary: 30000, department: "HR", available: false },
];

// Display Employee List
function displayEmployees(list = employees) {
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = "";
    list.forEach(emp => {
        const row = `<tr>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.salary}</td>
      <td>${emp.department}</td>
      <td>${emp.available ? "Yes" : "No"}</td>
    </tr>`;
        tbody.innerHTML += row;
    });
}
displayEmployees();

// Add New Employee
function addEmployee() {
    const id = Number(document.getElementById("empId").value);
    const name = document.getElementById("empName").value;
    const position = document.getElementById("empPosition").value;
    const salary = Number(document.getElementById("empSalary").value);
    const department = document.getElementById("empDepartment").value;
    const available = document.getElementById("empAvailability").value === "true";

    if (!id || !name) {
        alert("Please enter valid ID and Name!");
        return;
    }

    employees.push({ id, name, position, salary, department, available });
    displayEmployees();
    clearInputs();
}

// Remove Employee by ID
function removeEmployee() {
    const id = Number(document.getElementById("empId").value);
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
    clearInputs();
}

// Update Employee Information
function updateEmployee() {
    const id = Number(document.getElementById("empId").value);
    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        alert("Employee not found!");
        return;
    }

    employee.name = document.getElementById("empName").value || employee.name;
    employee.position = document.getElementById("empPosition").value || employee.position;
    employee.salary = Number(document.getElementById("empSalary").value) || employee.salary;
    employee.department = document.getElementById("empDepartment").value || employee.department;
    employee.available = document.getElementById("empAvailability").value === "true";

    displayEmployees();
    clearInputs();
}

// Search for Employee by Name
function searchEmployee() {
    const searchTerm = document.getElementById("searchName").value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm)
    );
    displayEmployees(filtered);
}

// Calculate Total Salary of Active Employees
function calculateTotalSalary() {
    const total = employees
        .filter(emp => emp.available)
        .reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").textContent =
        `Total Salary of Active Employees: ₹${total}`;
}

// Department-wise Salary Report
function generateDeptReport() {
    const report = {};
    employees.forEach(emp => {
        if (!report[emp.department]) report[emp.department] = 0;
        report[emp.department] += emp.salary;
    });

    let output = "Department-wise Salary Report:\n";
    for (const dept in report) {
        output += `${dept}: ₹${report[dept]}\n`;
    }
    alert(output);
}

// Sort Employees by Salary
let sortAscending = true;
function sortBySalary() {
    employees.sort((a, b) => sortAscending ? a.salary - b.salary : b.salary - a.salary);
    sortAscending = !sortAscending;
    displayEmployees();
}

// Update Employee Availability
function toggleAvailability(id) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
        emp.available = !emp.available;
        displayEmployees();
    }
}

// clear Inputs
function clearInputs() {
    document.querySelectorAll("input").forEach(i => (i.value = ""));
}
