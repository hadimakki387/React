import React from "react";

function first(props) {

  return (
    <div className="right">
      <div className="title-div">
        <h1 className="title" id="title">Personal</h1>
        <span className="instrucions">
          Please provide your name, email address, phone number
        </span>
      </div>
      <form action="/" method="POST" onSubmit={props.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="Name"
          placeholder="John"
          className="input"
          autoComplete="off"
          value={props.formData.Name}
          required
        ></input>

        <p>
          Email Address{" "}
          {props.emailError && (
            <span className="error">{props.emailError}</span>
          )}
        </p>
        <input
          type="email"
          name="email"
          ref={props.emailRef}
          onInput={props.handleEmailInput}
          placeholder="example@email.com"
          className={props.emailError ? "input color" : "input"}
          value={props.formData.email}
          required
        ></input>

        <p>
          Phone Number{" "}
          {props.telError && (
            <span className="tel-error">{props.telError}</span>
          )}{" "}
        </p>
        <input
          type="tel"
          name="phone"
          className={props.telError ? "input color" : "input"}
          placeholder="+1 234 567 789"
          ref={props.telRef}
          onInput={props.handleTelInput}
          autoComplete="off"
          value={props.formData.phone}
          required
        ></input>

        <div className="righ1-btns-div">
        
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

export default first;
