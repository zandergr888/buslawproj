import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
    // Convert the Set into an array of objects including the agreement/disagreement info
    const selectedData = Array.from(selectedStatements).map(statement => ({
      text: statement.text,
      questionId: statement.questionId, // Include the questionId
      agrees: statement.impliesAgreement // This should reflect the user's choice, true if they agree, false if not
    }));
    onSelection(selectedData);
  };

  return (
    <div className="container mt-4">
      <h2>Select the statements you agree with:</h2>
      <div className="list-group">
        {statements.map((statement, index) => (
          <div key={index} className="list-group-item">
            <div className="form-check">
              <input 
                className="form-check-input"
                type="checkbox" 
                id={`statement-${index}`}
                checked={selectedStatements.has(statement)}
                onChange={() => toggleStatement(statement)}
              />
              <label className="form-check-label" htmlFor={`statement-${index}`}>
                {statement.text}
              </label>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit Selections</button>
    </div>
  );
}

export default StatementComponent;
