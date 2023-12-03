import React, { useState, useEffect } from 'react';
import SurveyComponent from './SurveyComponent';
import StatementComponent from './StatementComponent';
import ResultComponent from './ResultComponent';

function App() {
  const [step, setStep] = useState(1);
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [selections, setSelections] = useState([]);
  
  // Sample statements
  const statements = [
    // Climate Change Statements
    { text: "The majority of scientists agree that human activities contribute significantly to climate change.", questionId: "climatechange", impliesAgreement: true },
    { text: "Rising global temperatures over the last century are primarily a result of natural phenomena.", questionId: "climatechange", impliesAgreement: false },

    // Social Media Statements
    { text: "Social media platforms have significantly improved global communication and connectivity.", questionId: "socialmedia", impliesAgreement: true },
    { text: "The risks to personal privacy on social media are generally overstated.", questionId: "socialmedia", impliesAgreement: false },

    // Vaccine Statements
    { text: "Vaccinations are crucial for eradicating dangerous diseases like measles and polio.", questionId: "vaccine", impliesAgreement: true },
    { text: "The potential side effects and risks associated with vaccines outweigh their benefits.", questionId: "vaccine", impliesAgreement: false },

    // Taxes Statements
    { text: "Reducing corporate taxes can lead to economic growth and increased employment opportunities.", questionId: "taxes", impliesAgreement: true },
    { text: "Lowering taxes for corporations primarily benefits the wealthy and does not lead to significant job growth.", questionId: "taxes", impliesAgreement: false },

    // Standardized Tests Statements
    { text: "Standardized tests are a fair and effective way to assess a student's academic ability.", questionId: "tests", impliesAgreement: true },
    { text: "Standardized tests are not an accurate measure of a student's intelligence and capabilities.", questionId: "tests", impliesAgreement: false },

    // Cultural Diversity Statements
    { text: "Cultural diversity strengthens a society by bringing different perspectives and ideas.", questionId: "diversity", impliesAgreement: true },
    { text: "Cultural diversity can lead to conflicts and misunderstandings in a society.", questionId: "diversity", impliesAgreement: false },

    // Scientific Research Statements
    { text: "Government funding of scientific research ensures objectivity and public benefit.", questionId: "research", impliesAgreement: true },
    { text: "Scientific research should be funded by private entities to encourage innovation and efficiency.", questionId: "research", impliesAgreement: false },

    // Plant-Based Diets Statements
    { text: "Plant-based diets are healthier and more sustainable than diets high in animal products.", questionId: "vegans", impliesAgreement: true },
    { text: "Plant-based diets lack certain nutrients that are essential and more easily obtained from animal products.", questionId: "vegans", impliesAgreement: false },
];

  useEffect(() => {
    console.log(surveyAnswers);
  }, [surveyAnswers]);

  const handleSurveySubmit = (answers) => {
    setSurveyAnswers(answers);
    console.log(surveyAnswers);
    setStep(2);
  };

  const handleStatementSelect = (selectedStatements) => {
    setSelections(selectedStatements);
    handleFinishSelection(); // Automatically move to the next step
  };

  const handleFinishSelection = () => {
    console.log('Finish button clicked');
    setStep(3); // Move to the ResultComponent
  };

  const renderComponent = () => {
    switch(step) {
      case 1:
        return <SurveyComponent onSubmit={handleSurveySubmit} />;
      case 2:
        return <StatementComponent 
                 statements={statements} 
                 onSelection={handleStatementSelect} 
                 onFinish={handleFinishSelection} />;
      case 3:
        console.log("first",selections);
        console.log("second",surveyAnswers)
        return <ResultComponent selections={selections} surveyAnswers={surveyAnswers} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="App">
      <div className="form-style-7">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
