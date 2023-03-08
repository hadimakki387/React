import React,{useState} from "react";

function AddOns(props){
    const [check,setCheck]=useState(false)
    const [isSelected, setIsSelected] = useState(false);

  function addOnChecked(){
    setCheck(!check)
    setIsSelected(!isSelected)
    if (!isSelected) {
      props.onAdd({
        name:props.name,
        moprice:props.moPrice,
        yrprice:props.yrPrice
      });
    } else {
      props.onRemove({
        name:props.name,
        moprice:props.moPrice,
        yrprice:props.yrPrice
      });
    }
  }
    return(
        <div className={check===false?"addOns-div":"addOns-div checked"} onClick={addOnChecked}>
          <div className="addOns-feature">
          
            <div className="inner1">
            
            <input type="checkbox" name="checkbox-checked" className="check-btn" checked={check} readOnly/>
          
            </div>

            <div className="inner2">
            <span className="addOns-title">{props.name}</span><br/>
            <span className="addOns-desc">{props.description}</span>
            </div>
            
          </div>
          <div className="addsOn-pricing">
            <p>+${props.subType===false?props.moPrice +"/mo":props.yrPrice+"/yr"}</p>
          </div>
        </div>
    )
}

export default AddOns;