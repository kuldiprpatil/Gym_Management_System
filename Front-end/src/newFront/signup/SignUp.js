import React, { useState, useEffect } from "react";
import Axios from "axios";

import { API_URL } from "../../components/common/URL";
import { useHistory } from "react-router";
import Navbar from "./Navbar.js";

const SignUp = (props) => {
  const history = useHistory();
  const inputstyle = {
    color: "black",
    background: "transparent",
  };

  const intialValues = { complete_name: "", contact: "", email: "", password: "", question: "", questionAns: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRegister = () => {

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      Axios.post(API_URL + "signup", {
        completeName: formValues.complete_name,
        contact: formValues.contact,
        email: formValues.email,
        password: formValues.password,
        question: formValues.question,
        answer: formValues.questionAns,
      }).then((response) => {
        console.log("in response of signup");
        console.log(response.data.data);

        if (response.data.data === "success") {
          alert("SignUp Successfull");
          console.log(response.data.data + "in signup response");
          console.log("next is history");
          history.push("/Signin");
          window.location.reload();
        } else {
          alert(response.data.data);
        }
      });


    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailregx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneregx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (!values.complete_name) {
      errors.complete_name = "Please enter your full name."
    }

    if (!values.contact) {
      errors.contact = "Please enter your contact number."
    }
    else if (!phoneregx.test(values.contact))
      errors.contact = "This is not a valid contact number.";

    if (!values.email) {
      errors.email = "Please enter your email."
    }
    else if (!emailregx.test(values.email))
      errors.email = "This is not a valid email format.";

    if (!values.password) {
      errors.password = "Please enter password."
    }
    else if (!strongRegex.test(values.password))
      errors.password = "Passwords must be atleast 8 characters long,contain atleast 1 smallcap letter,largecap letter,special characters and number.";

    if (!values.questionAns) {
      errors.questionAns = "Please enter answer of security question."
    }

    return errors;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form className="formCenter">
          <div className="form-group">
            <div className="col">
              <h1>SignUp</h1>
            </div>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="username">User Name</label>
            <input
              className="form-control "
              type="text"
              name="complete_name"
              placeholder="Enter User Name"
              value={formValues.complete_name}
              onChange={handleChange}
            ></input>
            <p style={{ color: 'red' }}>{formErrors.complete_name}</p>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="contact">Conatct No.</label>
            <input
              className="form-control "
              type="number"
              name="contact"
              placeholder="Enter your Contact"
              value={formValues.contact}
              onChange={handleChange}
            ></input>
            <p style={{ color: 'red' }}>{formErrors.contact}</p>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formValues.email}
              onChange={handleChange}
            ></input>
            <p style={{ color: 'red' }}>{formErrors.email}</p>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              required={"required"}
              placeholder="Enter Password"
              value={formValues.password}
              onChange={handleChange}
            ></input>
            <p style={{ color: 'red' }}>{formErrors.password}</p>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="question">Question</label>
            <select
              id="question"
              style={inputstyle}
              type="text"
              name="question"
              className="form-control form-control-sm"
              onChange={handleChange}
            >
              <option selected value="1">
                What is your Nickname ?
              </option>
              <option value="2">What is your favourite Sport ?</option>
              <option value="3">What is your favourite City ?</option>
              <option value="4">Who is your Best Friend ?</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="questionAns">Answer</label>
            <input
              className="form-control "
              type="text"
              name="questionAns"
              placeholder="Enter your Answer"
              value={formValues.questionAns}
              onChange={handleChange}
            ></input>
            <p style={{ color: 'red' }}>{formErrors.questionAns}</p>
          </div>
          <div className="form-group col-md-4">
            <div className="col">
              <button
                onClick={handleRegister}
                className="btn btn-success"
                type="button"
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
