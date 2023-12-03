import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="mb-4">Survey Form</h2>
                    <h4>Please answer the following questions</h4>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Question 1: Do you believe that climate change is primarily caused by human activities?</label>
                            <select name="climatechange" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 2: Do you think that the benefits of social media outweigh the privacy concerns?</label>
                            <select name="socialmedia" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 3: Is it important to get vaccinated against common infectious diseases?</label>
                            <select name="vaccine" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 4: Do you think that lowering taxes for corporations leads to significant job growth?</label>
                            <select name="taxes" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 5: Do standardized tests accurately measure a student's intelligence and capabilities?</label>
                            <select name="tests" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 6: Do you believe that cultural diversity strengthens a society?</label>
                            <select name="diversity" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 7: Should scientific research always be government-funded to avoid commercial bias?</label>
                            <select name="research" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Question 8: Are plant-based diets more beneficial for health than diets including meat?</label>
                            <select name="vegans" className="form-select" onChange={handleInputChange}>
                                <option value="none">Select</option>
                                <option value="agree">Agree</option>
                                <option value="disagree">Disagree</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SurveyComponent;
