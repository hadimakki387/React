import React, { useState } from 'react';
import SubscriptionPlan from './subPlan';

function Right2(props) {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [subType,setSubType] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();

  }

  function handleGoBack() {
    // Navigate back to previous screen
  }
    
  function Checked(event){
    setSubType(!subType)
   
  }
  
  function handlePlanSelection(planName){
    setSelectedPlan(planName);
  }

  
  

  return (
    <div className="right">
    <div className="title-div">
        <h1 className="title" id="title">Select Your Plan</h1>
        <span className="instrucions">
          You have the option of monthly and yearly billing.
        </span>
      </div>
      <form action="/" method="POST" onSubmit={props.handleSubmit}>

      <div className={subType===false?'subscritption':'subscritption bottom'}>
        
            <SubscriptionPlan
            name="Arcade"
            price={subType===false?"$9/mo":"$90/yr"}
            img="icon-arcade.png"
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Arcade")}
            subType={subType}
        />
        
        <SubscriptionPlan
            name="Advanced"
            price={subType===false?"$12/mo":"$120/yr"}
            img="icon-advanced.png"
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Advanced")}
            subType={subType}
        />
        <SubscriptionPlan
            name="Pro"
            price={subType===false?"$15/mo":"$150/yr"}
            img="icon-pro.png"
            selectedPlan={selectedPlan} 
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Pro")}
            subType={subType}
        />
      </div>
      <div className={subType===false?"sub-time":"sub-time moveDown"}>
          <span className={subType ===false?'chosen':"not-chosen"}>Monthly</span>
          <label className='switch'>
            <input type="checkbox" onClick={Checked}></input>
            <span className='slider round'></span>
          </label>
          <span className={subType ===true?'chosen':"not-chosen"}>Yearly</span>
        </div>
      <div className="right2-btns-div">
        <div className="submit1">
          <button type="button" className="submit-btn1" onClick={props.goBack}>
            Go Back
          </button>
        </div>
        <div className="submit2">
          <button type="submit" className="submit-btn2">
            Next Step
          </button>
        </div>
        </div>
        
    </form>
    </div>
  );
}
export default Right2;
