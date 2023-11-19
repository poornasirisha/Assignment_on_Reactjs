
import React, { useState } from 'react';
import EmployeeItem from './EmployeeItem';
import ModifyEmployeeForm from './ModifyEmployeeForm';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 60000 },
    // Add more dummy data as needed
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleModify = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = (employeeId) => {
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };

  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <EmployeeItem
            key={employee.id}
            employee={employee}
            onModify={handleModify}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      {selectedEmployee && (
        <ModifyEmployeeForm
          employee={selectedEmployee}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default EmployeeList;
