
import React, { useState } from 'react';

const AddEmployeeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled before adding the employee
    if (formData.name && formData.position && formData.salary) {
      // Assuming you have a function to generate a unique ID (e.g., uuid)
      const newEmployee = { id: generateUniqueId(), ...formData };
      onAdd(newEmployee);
      setFormData({ name: '', position: '', salary: '' }); // Clear the form after adding
    } else {
      // Handle error or provide feedback to the user
      console.error('Please fill in all fields');
    }
  };

  const generateUniqueId = () => {
    // Implement your logic to generate a unique ID here
    // You can use libraries like uuid or any custom logic
    // For simplicity, let's use a timestamp for now
    return new Date().getTime();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </label>
      <label>
        Salary:
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployeeForm;
