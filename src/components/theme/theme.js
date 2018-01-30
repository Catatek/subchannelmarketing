import React from "react";
import styled, { css } from "styled-components";

// THEME

export const theme = {
  primary: "#019095",
  secondary: "#989898",
};

// ROWS + COLUMNS

export const Wrapper = styled.div.attrs({
  backgroundcolor: props => props.backgroundcolor,
}) `
  background-color: ${props => props.backgroundcolor};
  height: 70vh;
`;

export const Row = styled.div.attrs({
  width: props => props.width,
  margin: props => props.margin,
  justifycontent: props => props.justifycontent,
  alignitems: props => props.alignitems,
  height: props => props.height,
  backgroundcolor: props => props.backgroundcolor,
}) `
  display: flex;
  flex-direction: row;
  width: ${props => props.width};
  margin: ${props => props.margin};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
  background-color: ${props => props.backgroundcolor};
`;

export const Column = styled.div.attrs({
  width: props => props.width,
  margin: props => props.margin,
  justifycontent: props => props.justifycontent,
  height: props => props.height,
  alignitems: props => props.alignitems,
  backgroundcolor: props => props.backgroundcolor,
  textalign: props => props.textalign,
}) `
  text-align: ${props => props.textalign};
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin: ${props => props.margin};
  justify-content: ${props => props.justifycontent};
  height: ${props => props.height};
  align-items: ${props => props.alignitems};
  background-color: ${props => props.backgroundcolor};
`;

// BUTTONS

export const SignupButton = styled.button`
  height: 50px;
  width: 250px;
  letter-spacing: 0.1em;
  border-radius: 15px;
  border: ${props => (props.primary ? "none" : "1px solid #EFCC29")};
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  outline: none;
  color: ${props => (props.primary ? "#4d4d4d" : "#EFCC29")};
  background-color: ${props => (props.primary ? "#EFCC29" : "inherit")};
  margin: 0.5em 0;
  &:hover {
    background-color: ${props => (props.primary ? "#01a0a6" : "inherit")};
    color: ${props => (props.primary ? "#fff" : "#01b1b7")};
    border: ${props => (props.primary ? "none" : "1px solid #01b1b7")};
    box-shadow: 1px 1px 15px #eee;
  }
`;

// TEXT

export const Title1 = styled.h1.attrs({
  color: props => props.color || "#4d4d4d",
  fontSize: props => props.fontSize || "2.2em",
}) `
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: 'Raleway', sans-serif;
  line-height: 1.4em;
  font-weight: 700;
`;

export const Title2 = styled.h2.attrs({
  color: props => props.color || "#4d4d4d",
  fontSize: props => props.fontSize || "1.4em",
}) `
  font-weight: 300;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4em;
`;

export const Title3 = styled.h3.attrs({
  color: props => props.color || "#4d4d4d",
  fontSize: props => props.fontSize || "1.2em",
}) `
  font-weight: 400;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: 'Raleway', sans-serif;
`;

export const Text = styled.p.attrs({
  margin: props => props.margin,
  padding: props => props.padding,
  width: props => props.width,
  lineheight: props => props.lineheight,
  color: props => props.color || "#4d4d4d",
  textalign: props => props.textalign,
  fontsize: props => props.fontsize || "1.2em",
}) `
  font-size: ${props => props.fontsize};
  text-align: ${props => props.textalign};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  line-height: ${props => props.lineheight};
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
`;
