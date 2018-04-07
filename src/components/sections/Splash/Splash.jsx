import React, { Component } from "react";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Column,
  Row,
  Text,
  SignupButton
} from "../../theme/theme.js";
import HeaderBg from "../../../assets/headerBg1.svg";
import MobileHeaderBg from "../../../assets/mobileHeader.svg";
import { Link, withRouter } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 98%;
  position: absolute;
  bottom: 1em;
  z-index: 1;
  @media (min-width: 500px) {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileImg = styled.img`
  width: 95%;
  position: absolute;
  bottom: 0.5em;
  zindex: 1;
  @media (min-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const StyledColumn = styled(Column)`
  width: 40%;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 45%;
  margin: 4em 0 0 0;
  min-width: 452px;
  @media screen and (max-width: 900px) {
    width: 96%;
    min-width: 0;
    height: 50%;
  }
`;

const StyledRow = styled(Row)`
  flex-direction: row;
`;

const Input = styled.input.attrs({
  inputerror: props => props.inputerror
})`
  height: 42px;
  width: 185px;
  font-family: "Montserrat", sans-serif;
  border: 1px solid #bbb;
  z-index: 100;
  border: ${props => props.inputerror};
  border-right: 1px solid transparent;
  outline: none;
  padding: 0 0.5em;
  border-radius: 5px 0 0 5px;
  color: #4d4d4d;
  &:focus {
    border: 1px solid #dd694a;
    border-right: 1px solid transparent;
  }
`;

const Button = styled.button.attrs({
  submitcolor: props => props.submitcolor
})`;
  
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  outline: none;
  z-index: 100;
  background-color: #dd694a;
  background-color ${props => props.submitcolor};
  color: #fff;
  height: 42x;
  width: 115px;
  padding: 0 0.5em;
  border: 1px solid transparent;
  border: none;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: #168787;
  }
`;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidUpdate() {}

  handleSubmitForm(values, ...props) {
    this.setState({
      email: values.email
    });
    console.log(this.state.email);
    setTimeout(() => {
      this.props.history.push("/comingsoon");
    }, 500);
  }

  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <Title1 margin=".5em 0 0 0">
            Distribute subscription-based content to any platform
          </Title1>
          <Title2 lineheight="1.4em">
            We give you the tools to share your content, so you can earn revenue
            and keep creating
          </Title2>

          <Formik
            initialValues={{
              email: ""
            }}
            onSubmit={values => {
              this.handleSubmitForm({
                email: values.email
              });
            }}
            validate={(values, props) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            render={({
              errors,
              touched,
              values,
              handleSubmit,
              handleBlur,
              handleChange
            }) => (
              <form onSubmit={handleSubmit}>
                <StyledRow>
                  <Input
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    inputerror={values.email && "1px solid #168787"}
                  />

                  <Button type="submit" submitcolor={values.email && "#168787"}>
                    Get Started
                  </Button>
                </StyledRow>
              </form>
            )}
          />
          <Img src={HeaderBg} alt="Subchannel Splash" />
          <MobileImg src={MobileHeaderBg} alt="Subchannel Splash" />
        </StyledColumn>
      </Wrapper>
    );
  }
}

export default withRouter(Splash);
