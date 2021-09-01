import React from "react";
import "./research.css";

function Research() {
  return (
    <div className="researchParent">
      <div className="research">
        <h1>Research</h1>
      </div>
      <div className="researhChildParent">
        <div className="researchChild">
          <p>
            Current research conducted by doctors, researchers and scientists at
            Stanford and Mount Sinai Hospital have indicated that the detection
            of COVID-19, even if the patient is asymptomatic, can be detected
            through everyday devices such as the apple watch.{" "}
          </p>
          <p>
            The idea behind Rhythm is to detect whether the participant has
            COVID-19 before the symptoms are onset. Wearable devices can measure
            physiological parameters such as heart rate, sleep activity, heart
            rate variability (autonomic nervous system function).{" "}
          </p>
          <p>
            By measuring the participants heart rate while they sleep, engineers
            at Rhythm can detect through a period of time, whether the person
            has COVID before they show symptoms (asymptomatic).
          </p>
        </div>
        <div className="researchChild2">*insert picture here *</div>
      </div>
    </div>
  );
}

export default Research;
