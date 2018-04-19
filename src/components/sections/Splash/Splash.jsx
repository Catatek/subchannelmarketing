import React, { Component } from "react";
import styled from "styled-components";
import { Title1, Title2, Column, Row } from "../../theme/theme.js";
import HeaderBg from "../../../assets/headerBg1.svg";
import MobileHeaderBg from "../../../assets/mobileHeader.svg";

import MailchimpSubscribe from "react-mailchimp-subscribe";

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

const Form = props => {
  let email;

  const submit = e => {
    e.preventDefault(e);
    email &&
      email.value.indexOf("@") > -1 &&
      props.onValidated({
        EMAIL: email.value
      });
    setTimeout(() => {
      props.history.push("/comingsoon");
    }, 1000);
    console.log(props.history);
  };
  return (
    <form>
      <StyledRow>
        {/* {props.status === "success" && (
          <div style={{ color: "green" }}>{props.message}</div>
        )}
        {props.status === "error" && <div>{props.message}</div>} */}

        <input
          className="signupInput"
          name="email"
          placeholder="Enter your email"
          type="email"
          ref={node => (email = node)}
          autoComplete="off"
        />
        <Button onClick={submit}>Get Started</Button>
      </StyledRow>
    </form>
  );
};

class Splash extends Component {
  render() {
    const url =
      "https://getsubchannel.us12.list-manage.com/subscribe/post?u=e51b5e6da42dfd8e7cb758c48&amp;id=1f50f3aeaf";
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
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <Form
                history={this.props.history}
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
          <Img src={HeaderBg} alt="Subchannel Splash" />
          <MobileImg src={MobileHeaderBg} alt="Subchannel Splash" />
        </StyledColumn>
      </Wrapper>
    );
  }
}

export default Splash;
