

import React from 'react';

const EmployeeItem = ({ employee, onModify, onDelete }) => {
  return (
    <li>
      {employee.name} - {employee.position} - ${employee.salary}
      <button onClick={() => onModify(employee)}>Modify</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </li>
  );
};

export default EmployeeItem;
