import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ResultComponent({ selections, surveyAnswers }) {
    


    const analyzeSelections = () => {
        if (selections.length === 0) {
            return "No data available for analysis.";
        }

        let alignedSelections = 0;
        selections.forEach(selection => {
            
            const userAgreesWithStatement = selection.agrees;
            console.log("bruh" , selection.agrees)
            const userAgreesWithSurvey = surveyAnswers[selection.questionId] === "agree";
            console.log(' i am', surveyAnswers[selection.text])
            
            if (userAgreesWithStatement === userAgreesWithSurvey) {
                alignedSelections++;
            }
        });

        let percentageAligned = (alignedSelections / selections.length) * 100;
        return `${percentageAligned.toFixed(2)}% of your choices align with your initial survey responses, indicating a potential confirmation bias.`;
    };
    return (
        <div className="container mt-4">
            <h2>Your Selections</h2>
            {selections.length === 0 ? (
                <p>No selections were made.</p>
            ) : (
                <ul className="list-group">
                    {selections.map((selection, index) => (
                        <li key={index} className="list-group-item">{selection.text}</li>
                    ))}
                </ul>
            )}
            <h3>Analysis</h3>
            <p>{analyzeSelections()}</p>
        </div>
    );
}

export default ResultComponent;
