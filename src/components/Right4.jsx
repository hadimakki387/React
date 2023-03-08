// Importing dependencies
import React, { useState } from "react";
import AddOns from "./addOns";

// Declaring a function component named Right4
function Right4(props) {
  // Storing data received from props into a local variable
  const data = props.data;

  // Defining state to manage user selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  //This function will get called on form submit
  function handleSubmit() {}

  // This function will get called on changing subscription plan or addon selections
  function handleChangeButton() {}

  // Iterating over all addons and calculating their total price
  const addonsTotal = data.addons.reduce(
    (total, add) =>
      total + (data.subType === "monthly" ? add.moprice : add.yrprice),
    0
  );

  // Calculating the total amount including plan price and add-on prices
  const Total = addonsTotal + data.planPrice;

  // Rendering the UI elements
  return (
    <div className="right right4-Mobile">
      <div className="righ4-title-div">
        <h1 className="title" id="title">
          Finishing up
        </h1>
        <span className="instrucions">
          Double-check everything looks OK before confirming
        </span>
      </div>
      <form action="/" method="POST" onSubmit={props.handleSubmit}>
        <div className="right4-div">
          <div>
            <div className="sub-type">
              <p>
                {data.PlanName} ({data.subType})
              </p>
              <br></br>
              <span>
                <button onClick={handleChangeButton}>Change</button>
              </span>
            </div>
          </div>
          <div>
            <p>
              $
              {data.subType === "monthly"
                ? data.planPrice + "/mo"
                : data.planPrice + "yr"}
            </p>
          </div>
        </div>

        <div className="right4-addonsMainDiv">
          {/* Mapping over all addons */}
          {data.addons.map((adds, index) => {
            return (
              <div className="right4-addonsDivs" key={index}>
                <div className="sub-type">
                  <p className="addOns-name">{adds.name}</p>
                </div>
                <div>
                  <p>
                    +$
                    {data.subType === "monthly"
                      ? adds.moprice + "/mo"
                      : adds.yrprice + "yr"}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="right4-totalDivs">
            <div className="sub-type">
              <p className="total-text">
                Total ({data.subType === "monthly" ? "per month" : "per year"})
              </p>
            </div>
            <div>
              <p className="total-price">
                +${data.subType === "monthly" ? Total + "/mo" : Total + "yr"}
              </p>
            </div>
          </div>
        </div>

        <div className="confirm-btns-div">
          <div className="back-div">
            {/* Button for going back to previous step*/}
            <button type="button" className="back-btn" onClick={props.goBack}>
              Go Back
            </button>
          </div>
          <div className="next-div">
            {/* Button for submitting the form */}
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// Exporting the component Right4
export default Right4;
