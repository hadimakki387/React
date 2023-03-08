import React from "react";

function Right1(props) {
  return (
    <div className="right">
      <div className="title-div title-Right1-div">
        <h1 className="title " id="title">
          Personal
        </h1>
        <span className="instrucions">
          Please provide your name, email address, phone number
        </span>
      </div>
      <form action="/" method="POST" onSubmit={props.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="Name"
          placeholder="e.g. Stephen King"
          className="input"
          autoComplete="off"
          
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
          placeholder="e.g. stephenking@lorem.com"
          className={props.emailError ? "input color" : "input"}
          
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
          placeholder="e.g. +1 234 567 789"
          ref={props.telRef}
          onInput={props.handleTelInput}
          autoComplete="off"
          
          required
        ></input>

        <div className="righ1-btns-div">
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

export default Right1;
