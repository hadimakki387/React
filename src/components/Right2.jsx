import React, { useState } from "react";
import SubscriptionPlan from "./subPlan";

function Right2(props) {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [subType, setSubType] = useState(false);

  
  // This function send the data back to the Info File
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCheckbox(subType);
    props.handleSelectedPlan(selectedPlan)
  };

  // This function checks if the yearly subscription is true or false
  function Checked(event) {
    setSubType(event.target.checked)    
  }

  // This funcion recieves the plan name that is clicked and set the selectedPlan equals to it
  function handlePlanSelection(planName) {
    setSelectedPlan(planName);
  }
  

  return (
    <div className="right">
      <div className="title-div">
        <h1 className="title" id="title">
          Select Your Plan
        </h1>
        <span className="instrucions">
          You have the option of monthly and yearly billing.
        </span>
      </div>
      <form action="/" method="POST" onSubmit={handleSubmit} >
        <div
          className={
            subType === false ? "subscritption" : "subscritption bottom"
          }
        >
          <SubscriptionPlan
            name="Arcade"
            price={subType === false ? 9 : 90}
            img="icon-arcade.png"
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Arcade")}
            subType={subType}
          />

          <SubscriptionPlan
            name="Advanced"
            price={subType === false ? 12 : 120}
            img="icon-advanced.png"
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Advanced")}
            subType={subType}
          />
          <SubscriptionPlan
            name="Pro"
            price={subType === false ? 15 : 150}
            img="icon-pro.png"
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection("Pro")}
            subType={subType}
          />
        </div>
        <div className={subType === false ? "sub-time" : "sub-time moveDown"}>
          <span className={subType === false ? "chosen" : "not-chosen"}>
            Monthly
          </span>
          <label className="switch">
            <input type="checkbox" onChange={Checked}  ></input>
            <span className="slider round"></span>
          </label>
          <span className={subType === true ? "chosen" : "not-chosen"}>
            Yearly
          </span>
        </div>
        <div className="right2-btns-div">
          <div className="back-div">
            <button
              type="button"
              className="back-btn"
              onClick={props.goBack}
            >
              Go Back
            </button>
          </div>
          <div className="next-div">
            <button type="submit" className="next-btn">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Right2;
