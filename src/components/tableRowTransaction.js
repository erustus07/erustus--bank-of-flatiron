import React from "react";

function TableRowTransaction({ transaction, onDelete, isNew}) {
  const rowStyle = {
    backgroundColor: isNew ? "#dff0d8" : "inherit", 
    color: isNew ? "#fff" : "inherit", 
  };

  return (
    <tr style={rowStyle}>
      <td>{transaction.dates}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amounts}</td>
      <td>
        <button onClick={() => onDelete(transaction.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRowTransaction;
