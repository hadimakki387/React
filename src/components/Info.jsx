import React, {useState ,useRef} from "react";
import Right1 from "./right1";
import Right2 from "./Right2";


function Info(){

    const [formData, setFormData] = useState({});
    const [count,setCount]=useState(0)

  const handleSubmit = event => {
    event.preventDefault();

    const { target: { elements } } = event;
    const data = {};

    Array.from(elements).forEach(element => {
        if (element.tagName === 'INPUT') {
          data[element.name] = element.value;
        }
      });

    setFormData(data);
    if(count<3){
        setCount(count+1)
    }else{
        setCount(0)
    }
    
  };

  console.log(formData)

    const emailRef = useRef(null);
    const [emailError, setEmailError] = useState(null);
    const[color,setcolor]=useState("")

    const handleEmailInput = () => {
    const email = emailRef.current.value;
    const isValid = /\S+@\S+\.\S+/.test(email);

    if (isValid) {
      setEmailError("");
      emailRef.current.setCustomValidity('');
      setcolor("input")
    } else {
      setEmailError('Enter a valid email');
      emailRef.current.setCustomValidity('Enter a valid email');
      setcolor("input color")
    }
  };

  const telRef = useRef(null);
  const [telError, setTelError] = useState(null);
  const handleTelInput = () => {
    const tel = telRef.current.value;
    const TisValid = /^\+/.test(tel);

    if (TisValid) {
      setTelError(null);
      telRef.current.setCustomValidity('');
    } else {
      setTelError('Enter a valid Number');
      telRef.current.setCustomValidity('Enter a valid Number');
    }
  };
  function goBack() {
    setCount(count-1)
  }
   
    return(
        <div className="App">
      <div className='left'>
       <div className="left-steps">
        <p className={count===0?"number number-bg":"number "}>1</p>
        <p>
          <span className="step ">Step 1</span><br></br><span className="left-description">YOU INFO</span>
        </p>
       </div>
       <div className="left-steps">
        <p className={count===1?"number number-bg":"number"}>2</p>
        <p>
          <span className="step">Step 1</span><br></br><span className="left-description">SELECT PLAN</span>
        </p>
       </div>
       <div className="left-steps">
        <p className={count===2?"number number-bg":"number"}>3</p>
        <p>
          <span className="step">Step 1</span><br></br><span className="left-description">ADD-ONS</span>
        </p>
       </div>
       <div className="left-steps">
        <p className={count===3?"number number-bg":"number"}>4</p>
        <p>
          <span className="step">Step 1</span><br></br><span className="left-description">SUMMARY</span>
        </p>
       </div>
      </div>

     
      {count===0?<Right1 
      handleSubmit={handleSubmit}
      emailError={emailError}
      emailRef={emailRef}
      handleEmailInput={handleEmailInput}
      telError={telError}
      telRef={telRef}
      handleTelInput={handleTelInput}
      goBack={goBack}
      formData={formData}
      />:count===1?<Right2
      handleSubmit={handleSubmit}
      emailError={emailError}
      emailRef={emailRef}
      handleEmailInput={handleEmailInput}
      telError={telError}
      telRef={telRef}
      handleTelInput={handleTelInput}
      goBack={goBack}
      formData={formData}
      />:null}

      

    </div>
    )    
}

export default Info;