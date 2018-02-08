import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../theme/theme.js";

const Form = styled.form`
  dislay: flex;
`;

const Input = styled.input`
  margin: 0.5em;
  padding: 0.2em;
  height: 36px;
  width: 250px;
  background-color: #f6f6f6;
  color: #656565;
  cursor: text;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: "Raleway", sans-serif;
  font-size: 0.9em;
  padding: 0em 1em;
  outline: none;
  &:focus {
    border: 1px solid ${props => props.theme.primary};
  }
  z-index: 10000;
`;

class SubscriberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ""
    };
  }
  render() {
    return (
      <Form
        action="https://getsubchannel.us17.list-manage.com/subscribe/post?u=42464a9a2744a5c519c556d4b&amp;id=652381a754"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <Input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="Signup using your email address"
          value={this.state.emailValue}
          onChange={e => {
            this.setState({ emailValue: e.target.value });
          }}
          required
        />
        <Button primary type="submit">
          Join
        </Button>
      </Form>
    );
  }
}

export default SubscriberForm;
