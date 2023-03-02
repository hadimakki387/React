import React, { useState } from 'react';


function SubscriptionPlan(props) {
  const { selectedPlan, setSelectedPlan } = props;

  function handlePlanSelection() {
    setSelectedPlan(props.name);
  }
  console.log(props.subType)

  return (
    <div className={`sub-div ${selectedPlan === props.name ? 'selected' : ''}`} onClick={handlePlanSelection}>
      <h1><img src={props.img} alt="hfg"></img></h1>
      <div className='sub-text-div'>
      <p className="sub-text">{props.name}</p>
      <span className='prices'>{props.price}</span><br></br>
      {props.subType===true?<span className='2monFree'>2 months free</span>:null}
      </div>
    </div>
  );
}

export default SubscriptionPlan;