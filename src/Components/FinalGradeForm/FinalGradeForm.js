import React from "react";
import { useState } from "react";
import './FinalGradeForm.css';


function FinalGradeForm(props) {


    return(
        <div className="final-form">
            <form className="form-content">
                <div className="form-part">
                <label>Current Grade:</label><input id="current-grade-input" type='number' value={props.currentGrade} onChange={props.handleCurrentGradeChange}></input><label>%</label>
                </div>
                <div className="form-part">
                <label>Desired Grade:</label><input id="desired-grade-input" type='number' value={props.desiredGrade} onChange={props.handleDesiredGradeChange}></input><label>%</label>
                </div>
                <div className="form-part">
                <label>Final Weight:</label><input id="final-weight-input" type='number' value={props.finalWeight} onChange={props.handleFinalWeightChange}></input><label>%</label>
                </div>

            </form>
        </div>
    )
}

export default FinalGradeForm;