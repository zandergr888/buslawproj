import React, { useState } from 'react';
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
    { text: "The majority of scientists agree that human activities contribute significantly to climate change.", questionId: "climatechange" },
    { text: "Rising global temperatures over the last century are primarily a result of natural phenomena.", questionId: "climatechange" },
  
    // Social Media Statements
    { text: "Social media platforms have significantly improved global communication and connectivity.", questionId: "socialmedia" },
    { text: "The risks to personal privacy on social media are generally overstated.", questionId: "socialmedia" },
  
    // Vaccine Statements
    { text: "Vaccinations are crucial for eradicating dangerous diseases like measles and polio.", questionId: "vaccine" },
    { text: "The benefits of vaccinations far outweigh any potential risks.", questionId: "vaccine" },
  
    // Taxes Statements
    { text: "Reducing corporate taxes can lead to economic growth and increased employment opportunities.", questionId: "taxes" },
    { text: "Higher taxes on corporations discourage investment and hinder economic growth.", questionId: "taxes" },
  
    // Standardized Tests Statements
    { text: "Standardized tests are a fair and effective way to assess a student's academic ability.", questionId: "tests" },
    { text: "Many standardized tests fail to account for diverse learning styles and intelligences.", questionId: "tests" },
  
    // Cultural Diversity Statements
    { text: "Culturally diverse societies are more innovative and adaptable.", questionId: "diversity" },
    { text: "Cultural diversity enhances a society's artistic, culinary, and intellectual life.", questionId: "diversity" },
  
    // Scientific Research Statements
    { text: "Government funding of scientific research ensures objectivity and public benefit.", questionId: "research" },
    { text: "Privately funded research can be biased and driven by profit motives.", questionId: "research" },
  
    // Plant-Based Diets Statements
    { text: "Plant-based diets are healthier and more sustainable than diets high in animal products.", questionId: "vegans" },
    { text: "Eating a well-balanced vegetarian diet can reduce the risk of chronic diseases.", questionId: "vegans" },
  
    // Additional Statements
    { text: "Extreme weather events are becoming more frequent due to climate change.", questionId: "climatechange" },
    { text: "Social media can negatively impact mental health, especially among younger users.", questionId: "socialmedia" },
    { text: "Mandatory vaccinations are necessary for public health and safety.", questionId: "vaccine" },
    { text: "Tax incentives are crucial for businesses to thrive and expand.", questionId: "taxes" },
    { text: "Cultural diversity can sometimes lead to social tensions and challenges.", questionId: "diversity" },
    { text: "Government-funded research is often slow and bogged down by bureaucracy.", questionId: "research" },
    { text: "A diet including meat is necessary for complete nutrition.", questionId: "vegans" }
  ];
  

  const handleSurveySubmit = (answers) => {
    setSurveyAnswers(answers);
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
