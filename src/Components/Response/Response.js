import React from "react";
import './Response.css';
import { useParams } from "react-router-dom";


function Response(props) {

    const { calculatorType } = useParams();
    let willRender;

    if (calculatorType === 'final-grade') {
        willRender = (
            <div className="response">
                <h1>Required Final Grade:</h1>
                <h1>{props.requiredGrade}%</h1>
                <p>Better get working soon!</p>
            </div>
        )
    } else {
        willRender = (
            <div className="response">
                <h1>Your Overall Grade </h1>
                <h1>{props.overallGrade}%</h1>
                <p>Hope you're happy!</p>
            </div>
        )
    }

    return willRender;
}

export default Response;