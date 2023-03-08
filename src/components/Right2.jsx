import React, { useState } from "react";
import SubscriptionPlan from "./subPlan";

function Right2(props) {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [subType, setSubType] = useState(false);
  const [choosed, setChoosed] = useState(false);
  
  // This function send the data back to the Info File
  const handleSubmit = (event) => {
    event.preventDefault();
    if (choosed) {
      props.handleCheckbox(subType);
      props.handleSelectedPlan(selectedPlan);
    }
  };

  // This function checks if the yearly subscription is true or false
  function handleSubscriptionType(event) {
    setSubType(event.target.checked);
  }

  // This function receives the plan name that is clicked and sets the selectedPlan equals to it
  function handlePlanSelection(plan) {
    setSelectedPlan(plan);
    setChoosed(true);
  }

  return (
    <div className="right right2Mobile">
      <div className="title-div">
        <h1 className="title" id="title">
          Select Your Plan
        </h1>
        <span className="instrucions">
          You have the option of monthly and yearly billing.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
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
            onClick={() => handlePlanSelection({ name: "Arcade", price: subType === false ? 9 : 90 })}
            subType={subType}
            plan={props.data}
          />

          <SubscriptionPlan
            name="Advanced"
            price={subType === false ? 12 : 120}
            img="icon-advanced.png"
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection({ name: "Advanced", price: subType === false ? 12 : 120 })}
            subType={subType}
          />
          <SubscriptionPlan
            name="Pro"
            price={subType === false ? 15 : 150}
            img="icon-pro.png"
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onClick={() => handlePlanSelection({ name: "Pro", price: subType === false ? 15 : 150 })}
            subType={subType}
          />
        </div>
        <div className={subType === false ? "sub-time" : "sub-time moveDown"}>
          <span className={subType === false ? "chosen" : "not-chosen"}>
            Monthly
          </span>
          <label className="switch">
            <input type="checkbox" onChange={handleSubscriptionType}></input>
            <span className="slider round"></span>
          </label>
          <span className={subType === true ? "chosen" : "not-chosen"}>
            Yearly
          </span>
        </div>
        <div className="right2-btns-div">
          <div className="back-div">
            <button type="button" className="back-btn" onClick={props.goBack}>
              Go Back
            </button>
          </div>
          <div className="next-div">
            <button type="submit" className={choosed===true ? "next-btn" : "next-btn-blocked" + (choosed===true ? "" : " disabled")}>
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Right2;
