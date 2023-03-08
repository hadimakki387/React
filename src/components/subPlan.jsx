import React, { useState } from "react";

function SubscriptionPlan(props) {
  const { selectedPlan, setSelectedPlan } = props;

  // This function Sends the name of the Subscription plan name to the Right 3 File
  function handlePlanSelection() {
    setSelectedPlan({name:props.name,price:props.price});
    props.onClick();
  }
 
 

  return (
    <div
      // in the className we are checking if the selected plan is the same as the prop.name which is sent from the Right2 file 
      className={`sub-div ${selectedPlan.name === props.name && selectedPlan.price === props.price ? "selected" : ""}`}
      onClick={handlePlanSelection}
    >
      <h1>
        <img src={props.img} alt="hfg"></img>
      </h1>
      <div className="sub-text-div">
        <p className="sub-text">{props.name}</p>
        <span className="prices">${props.price}/mo</span>
        <br></br>
        {props.subType === true ? (
          <span className="2monFree">2 months free</span>
        ) : null}
      </div>
    </div>
  );
}

export default SubscriptionPlan;
