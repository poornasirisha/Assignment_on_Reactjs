
import React, { useState } from 'react';

const ModifyEmployeeForm = ({ employee, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: employee.name,
    position: employee.position,
    salary: employee.salary,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...employee, ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Modify Employee</h3>
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
      <button type="submit">Update</button>
    </form>
  );
};

export default ModifyEmployeeForm;
