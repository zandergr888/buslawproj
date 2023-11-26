import React from 'react';

function ResultComponent({ selections, surveyAnswers }) {
    const analyzeSelections = () => {
        if (selections.length === 0) {
            return "No data available for analysis.";
        }

        let alignedSelections = 0;
        selections.forEach(selection => {
            if (surveyAnswers[selection.questionId] === "agree") {
                alignedSelections++;
            }
        });

        let percentageAligned = (alignedSelections / selections.length) * 100;
        return `${percentageAligned.toFixed(2)}% of your choices align with your initial survey responses, indicating a potential confirmation bias.`;
    };

    return (
        <div>
            <h2>Your Selections</h2>
            {selections.length === 0 ? (
                <p>No selections were made.</p>
            ) : (
                <ul>
                    {selections.map((selection, index) => (
                        <li key={index}>{selection.text}</li>
                    ))}
                </ul>
            )}
            <h3>Analysis</h3>
            <p>{analyzeSelections()}</p>
        </div>
    );
}


export default ResultComponent;
