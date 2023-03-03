import React, { useState } from "react";
import AddOns from "./addOns";

function Right3(props) {

  const [selectedAddOns, setSelectedAddOns] = useState({});

  // This function handles the addOns from the addOns page and push them to the selectedAddOns
  function handleAddOnAdd(add) {
    setSelectedAddOns((prev,index) => ({
      ...prev,
      [add.name]: {
        name: add.name,
        moprice: add.moprice,
        yrprice: add.yrprice
      }
      
    }));
  }

  // This function Remove the add from the object whnever the user reclicked the addOn
  function handleAddOnRemove(add) {
    setSelectedAddOns((prev) => {
      const newSelected = { ...prev };
      delete newSelected[add.name];
      return newSelected;
    });
  }

  
  // This function pass the data from the Right3.jsx to Info.jsx
  function handleSubmit(){
    props.handleAddOns(selectedAddOns)
  }

  
  return (
    <div className="right">
      <div className="title-div">
        <h1 className="title" id="title">
          Pick add-ons
        </h1>
        <span className="instrucions">
          Add-ons help enhance your gaming experience
        </span>

      </div>
      <form action="/" method="POST" onSubmit={props.handleSubmit}>
        
        <AddOns 
          subType={props.subType}
          name="Online service"
          description="Access to multiplayer games"
          moPrice= {1}
          yrPrice={10}
          onAdd={handleAddOnAdd}
          onRemove={handleAddOnRemove}
        />
        <AddOns
          subType={props.subType}
          name="Larger storage"
          description="Extra 2 TB og cloud save"
          moPrice={2}
          yrPrice={20}
          onAdd={handleAddOnAdd}
          onRemove={handleAddOnRemove}
        />
        <AddOns
          subType={props.subType}
          name="Customizable profile"
          description="Custom theme on your profile"
          moPrice={2}
          yrPrice={20}
          onAdd={handleAddOnAdd}
          onRemove={handleAddOnRemove}
        />

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
            <button type="submit" className="next-btn" onClick={handleSubmit}>
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Right3;
