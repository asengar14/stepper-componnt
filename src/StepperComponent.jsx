import React from 'react';
import "./Stepper.scss";

function StepperComponent(props) {
    const { steps } = props;
    return (
        <div className="stepper-container">

        <ul className="steper-steps" style={{width:"100%"}}>

            {
                steps.map((step, index) => {
                    
                    let LiComponent;

                    if(step.progress === "CURRENT") {
                        LiComponent = <li key={index} className="current stepper-flex" style={step.style} >
                            <span>{step.label}</span>
                        </li>
                    } else if(step.progress === "INCOMPLETE") {
                        LiComponent = <li key={index} className="stepper-flex" style={step.style} > 
                            <span>{step.label}</span>
                        </li>
                    } else if(step.progress === "COMPLETED") {
                        LiComponent = <li key={index} className="stepper-flex" style={step.style} > 
                            <span className="completed">{step.label}</span>
                        </li>
                    }

                    return LiComponent;
                })
            }
        </ul>
    </div>
    )
}
 
export default StepperComponent
