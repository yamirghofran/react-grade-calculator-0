import React, { useState } from "react";
import './Main.css';
import FinalGradeForm from "../FinalGradeForm/FinalGradeForm";
import Response from "../Response/Response";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import OverallGradeForm from "../OverallGradeForm/OverallGradeForm";

function Main() {

    const { calculatorType } = useParams();

    const [currentGrade, setCurrentGrade] = useState(0);
    const [desiredGrade, setDesiredGrade] = useState(0);
    const [finalWeight, setFinalWeight] = useState(1);
    const [beforeFinal, setBeforeFinal] = useState(0);
    const [finalGrade, setFinalGrade] = useState(0);

    function handleCurrentGradeChange(e) {
        setCurrentGrade(e.target.value);
    }

    function handleDesiredGradeChange(e) {
        setDesiredGrade(e.target.value);
    }

    function handleFinalWeightChange(e) {
        setFinalWeight(e.target.value);
    }

    let requiredGrade = Math.round((((desiredGrade / 100) - ((1 - (finalWeight / 100)) * (currentGrade / 100))) / (finalWeight / 100)) * 100);

    //Other Part

    function handleBeforeFinalChange(e) {
        setBeforeFinal(e.target.value);
    }

    function handleFinalGradeChange(e) {
        setFinalGrade(e.target.value);
    }

    function handleFinalWeightChange(e) {
        setFinalWeight(e.target.value);
    }

    let overallGrade = (((100 - finalWeight)*beforeFinal) + (finalWeight * finalGrade)) / 100;


    let willRender;

    if (calculatorType === 'final-grade') {
        willRender = (
            <div className="container">
                <Navbar />
                <div className="main-part">
                    <FinalGradeForm handleCurrentGradeChange={handleCurrentGradeChange} handleDesiredGradeChange={handleDesiredGradeChange} handleFinalWeightChange={handleFinalWeightChange} currentGrade={currentGrade} desiredGrade={desiredGrade} finalWeight={finalWeight} />
                    <Response requiredGrade={requiredGrade} />
                </div>
            </div>
        )
    } else {
        willRender = (
            <div className="container">
                <Navbar />
                <div className="main-part">
                    <OverallGradeForm handleBeforeFinalChange={handleBeforeFinalChange} handleFinalGradeChange={handleFinalGradeChange} handleFinalWeightChange={handleFinalWeightChange} beforeFinal={beforeFinal} finalGrade={finalGrade} finalWeight={finalWeight} />
                    <Response overallGrade={overallGrade} />
                </div>
            </div>
        )
    }



    return willRender;
}

export default Main;