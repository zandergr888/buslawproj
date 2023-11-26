import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

function SurveyComponent({ onSubmit }) {
    const [answers, setAnswers] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(answers);
    };

    return (
        <div className="container">
            <div className="left">
                <div className="header">
                    <h2 className="animation a1">Survey Form</h2>
                    <h4 className="animation a2">Please answer the following questions</h4>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <div className="animation a3">
                            <label>Question 1: Do you believe that climate change is primarily caused by human activities?</label>
                            <select name="climatechange" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a4">
                            <label>Question 2: Do you think that the benefits of social media outweigh the privacy concerns?</label>
                            <select name="socialmedia" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a5">
                            <label>Question 3: Is it important to get vaccinated against common infectious diseases?</label>
                            <select name="vaccine" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a6">
                            <label>Question 4: Do you think that lowering taxes for corporations leads to significant job growth?</label>
                            <select name="taxes" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a7">
                            <label>Question 5: Do standardized tests accurately measure a student's intelligence and capabilities?</label>
                            <select name="tests" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a8">
                            <label>Question 6: Do you believe that cultural diversity strengthens a society?</label>
                            <select name="diversity" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a9">
                            <label>Question 7: Should scientific research always be government-funded to avoid commercial bias?</label>
                            <select name="research" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="animation a10">
                            <label>Question 8: Are plant-based diets more beneficial for health than diets including meat?</label>
                            <select name="vegans" className="form-field" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <button type="submit" className="form-field animation a11">Submit</button>
                    </form>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default SurveyComponent;
