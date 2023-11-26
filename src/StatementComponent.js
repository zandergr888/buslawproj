import React, { useState } from 'react';

function StatementComponent({ statements, onSelection }) {
  const [selectedStatements, setSelectedStatements] = useState(new Set());

  const toggleStatement = (statement) => {
    setSelectedStatements(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(statement)) {
        newSelected.delete(statement);
      } else {
        newSelected.add(statement);
      }
      return newSelected;
    });
  };

  const handleSubmit = () => {
    onSelection(Array.from(selectedStatements));
  };

  return (
    <div>
      <h2>Select the statements you agree with:</h2>
      {statements.map((statement, index) => (
        <div key={index}>
          <input 
            type="checkbox" 
            id={`statement-${index}`}
            checked={selectedStatements.has(statement)}
            onChange={() => toggleStatement(statement)}
          />
          <label htmlFor={`statement-${index}`}>{statement.text}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Selections</button>
    </div>
  );
}

export default StatementComponent;
