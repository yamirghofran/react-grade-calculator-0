import React from "react";
import { useState } from "react";
import './OverallGradeForm.css';


function OverallGradeForm(props) {


    return(
        <div className="final-form">
            <form className="form-content">
                <div className="form-part">
                <label>Grade Before Final:</label><input id="before-grade-input" type='number' value={props.currentGrade} onChange={props.handleBeforeFinalChange}></input><label>%</label>
                </div>
                <div className="form-part">
                <label>Grade on Final:</label><input id="final-grade-input" type='number' value={props.desiredGrade} onChange={props.handleFinalGradeChange}></input><label>%</label>
                </div>
                <div className="form-part">
                <label>Weight of Final:</label><input id="final-weight-input" type='number' value={props.finalWeight} onChange={props.handleFinalWeightChange}></input><label>%</label>
                </div>

            </form>
        </div>
    )
}

export default OverallGradeForm;