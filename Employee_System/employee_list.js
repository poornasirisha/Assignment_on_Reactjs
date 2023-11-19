import React, { useState, useEffect } from 'react';

const EmployeeList = ({ employees, onModify, onDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <div>
              <strong>Name:</strong> {employee.name}
            </div>
            <div>
              <strong>Position:</strong> {employee.position}
            </div>
            <div>
              <strong>Salary:</strong> ${employee.salary}
            </div>
            <div className="actions">
              <button onClick={() => onModify(employee)}>Modify</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddEmployeeForm = ({ onAdd }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (add more validation as needed)
    if (newEmployee.name && newEmployee.position && newEmployee.salary) {
      onAdd(newEmployee);
      setNewEmployee({ name: '', position: '', salary: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <label>
          Name:
          <input type="text" name="name" value={newEmployee.name} onChange={handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={newEmployee.position} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={newEmployee.salary} onChange={handleChange} />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

const App = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch initial data (dummy employees) using useEffect
  useEffect(() => {
    // Simulate fetching data from an API
    const dummyData = [
      { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 80000 },
      { id: 2, name: 'Jane Smith', position: 'Product Manager', salary: 90000 },
      { id: 3, name: 'Bob Johnson', position: 'UX Designer', salary: 75000 },
    ];

    setEmployees(dummyData);
  }, []);

  const handleModify = (employeeToModify) => {
    // In a real application, you might open a modal or navigate to another page for modification.
    console.log(`Modify employee with ID ${employeeToModify.id}`);
  };

  const handleDelete = (id) => {
    // Filter out the employee with the specified ID
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleAdd = (newEmployee) => {
    // Generate a unique ID (in a real app, you might use a more sophisticated ID generation)
    const newId = Math.max(...employees.map((employee) => employee.id), 0) + 1;
    const employeeToAdd = { ...newEmployee, id: newId };
    setEmployees((prevEmployees) => [...prevEmployees, employeeToAdd]);
  };

  return (
    <div>
      <EmployeeList employees={employees} onModify={handleModify} onDelete={handleDelete} />
      <AddEmployeeForm onAdd={handleAdd} />
    </div>
  );
};

export default App;
