import React, { useState, useRef } from "react";
import Right1 from "./right1";
import Right2 from "./Right2";
import Right3 from "./Right3";
import Right4 from "./Right4";
import ThankYou from "./ThankYou";

function Info() {
  // This section is to collect Form Data and increase the page number (count)
  const [formData, setFormData] = useState({});
  const [count, setCount] = useState(0);
  
  const handleSubmit = (event) => {
      event.preventDefault();
      
      const { target: { elements } } = event;
      const data = {};
  
      Array.from(elements).forEach((element) => {
          if (element.tagName === "INPUT") {
              data[element.name] = element.value;
          }
      });
  
      setFormData(data);
  
      if (count < 3) {
          setCount(count + 1);
      } else {
          setCount(count + 1);
          setTimeout(() => {
              setCount(0)
          }, 3000)
      }
  };
  
  // This section is to add specific validation to the email input
  const emailRef = useRef(null);
  const [emailError, setEmailError] = useState(null);
  const [color, setcolor] = useState("");

  const handleEmailInput = () => {
    const email = emailRef.current.value;
    const isValid = /\S+@\S+\.\S+/.test(email);

    if (isValid) {
      setEmailError("");
      emailRef.current.setCustomValidity("");
      setcolor("input");
    } else {
      setEmailError("Enter a valid email");
      emailRef.current.setCustomValidity("Enter a valid email");
      setcolor("input color");
    }
  };

  // This section is to addspecific validation to the Tel input
  const telRef = useRef(null);
  const [telError, setTelError] = useState(null);
  const handleTelInput = () => {
    const tel = telRef.current.value;
    const TisValid = /^\+/.test(tel);

    if (TisValid) {
      setTelError(null);
      telRef.current.setCustomValidity("");
    } else {
      setTelError("Enter a valid Number");
      telRef.current.setCustomValidity("Enter a valid Number");
    }
  };

  // This function is to decrease the page number (count)
  function goBack() {
    setCount(count - 1);
  }

  // this function is to recieve the checkBox state,to
  // check whether the subscription is monthly or yearly
  const [subType, setSubType] = useState();

  function handleCheckbox(value) {
    setSubType(value);
    setCount(count + 1);
  }

  // This function is to recieve the selected plan from
  // Right2.jsx
  const [selectedPlan, setSelectedPlan] = useState();
  function handleSelectedPlan(value) {
    setSelectedPlan(value);
  }

  if(selectedPlan){
    var plan =selectedPlan
  }
  

  // This function is to recieve te selected addOns from Right3
  const [selectedAddOns,setSelectedAddOns]=useState()
  function handleAddOns(value){
    setSelectedAddOns(value)
    setCount(count + 1)
    
  }
  
  
  
  

  // just a reminder for the 4th page
  // if(selectedAddOns){
  //   const addons =Object.entries(selectedAddOns)
  // addons.forEach((addon)=>{
  //   addon.forEach((add)=>{
  //     console.log(add.yrprice)
  //   })
  // })
  
  // }
  
  // This function handles the Change Button at the Right4 page
  function handleChangeButton(value){
    setCount(0)
  }
  
  
  // This const Store All the enters Data
  const data = {
    name: formData.Name,
    email: formData.email,
    phoneNumber: formData.phone,
    PlanName: plan?plan.name:null,
    planPrice:plan?plan.price:null,
    subType: subType === false ? "monthly" : !subType?null:subType===true?"yearly":null,
    addons:selectedAddOns
  };
  console.log(data)
  

  return (
    <div className="App">
      <div className="left left-Mobile" >
        <div className="left-steps">
        
          <p className={count === 0 ? "number number-bg" : "number "}>1</p>
          <p>
            <span className="step ">Step 1</span>
            <br></br>
            <span className="left-description">YOUR INFO</span>
          </p>
        </div>
        <div className="left-steps">
          <p className={count === 1 ? "number number-bg" : "number"}>2</p>
          <p>
            <span className="step">Step 2</span>
            <br></br>
            <span className="left-description">SELECT PLAN</span>
          </p>
        </div>
        <div className="left-steps">
          <p className={count === 2 ? "number number-bg" : "number"}>3</p>
          <p>
            <span className="step">Step 3</span>
            <br></br>
            <span className="left-description">ADD-ONS</span>
          </p>
        </div>
        <div className="left-steps">
          <p className={count >= 3 ? "number number-bg" : "number"}>4</p>
          <p>
            <span className="step">Step 4</span>
            <br></br>
            <span className="left-description">SUMMARY</span>
          </p>
        </div>
      </div>

      {count === 0 ? (
        <Right1
          handleSubmit={handleSubmit}
          emailError={emailError}
          emailRef={emailRef}
          handleEmailInput={handleEmailInput}
          telError={telError}
          telRef={telRef}
          handleTelInput={handleTelInput}
          goBack={goBack}
          formData={formData}
        />
      ) : count === 1 ? (
        <Right2
          handleSubmit={handleSubmit}
          emailError={emailError}
          emailRef={emailRef}
          handleEmailInput={handleEmailInput}
          telError={telError}
          telRef={telRef}
          handleTelInput={handleTelInput}
          goBack={goBack}
          formData={formData}
          handleCheckbox={(value) => handleCheckbox(value)}
          handleSelectedPlan={(value) => handleSelectedPlan(value)}
          data={data}
        />
      ) : count === 2 ? (
        <Right3
          handleSubmit={handleSubmit}
          emailError={emailError}
          emailRef={emailRef}
          handleEmailInput={handleEmailInput}
          telError={telError}
          telRef={telRef}
          handleTelInput={handleTelInput}
          goBack={goBack}
          formData={formData}
          subType={subType}
          handleAddOns={(value) => handleAddOns(value)}
          data={data}
        />
      ) : count === 3 ? (
        <Right4
          handleSubmit={handleSubmit}
          emailError={emailError}
          emailRef={emailRef}
          handleEmailInput={handleEmailInput}
          telError={telError}
          telRef={telRef}
          handleTelInput={handleTelInput}
          goBack={goBack}
          formData={formData}
          subType={subType}
          handleAddOns={(value) => handleAddOns(value)}
          data={data}
          handleChangeButton={(value)=>handleChangeButton(value)}
        />
      ) : count === 4 ?<ThankYou
        handleSubmit={handleSubmit}
      />:null}
    </div>
  );
}

export default Info;
