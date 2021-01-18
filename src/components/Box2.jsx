import React from "react";
import SignUpButton from "./SignUpButton";

export default function Box2() {
  return (
    <div className="box2">
      <h2>Monthly Subscription</h2>
      <h3>
        <span>$29</span> per month
      </h3>
      <p>Full access for less than $1 a day</p>

      <SignUpButton />
    </div>
  );
}
