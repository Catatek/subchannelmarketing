import React from 'react';
import styled, {css} from 'styled-components';

export const theme = {
    primary: '#019095',
    secondary: '#989898',
  };


//Containers

export const Wrapper = styled.div.attrs({
    backgroundcolor: props => props.backgroundcolor,
    })`
    background-color: ${props => props.backgroundcolor};
    height: 40vh;
    `;

export const Row = styled.div.attrs({
width: props => props.width,
margin: props => props.margin,
justifycontent: props => props.justifycontent,
alignitems: props => props.alignitems,
height: props => props.height,
backgroundcolor: props => props.backgroundcolor,
})`
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
backgroundcolor: props => props.backgroundcolor
})`
display: flex;
flex-direction: column;
width: ${props => props.width};
margin: ${props => props.margin};
justify-content: ${props => props.justifycontent};
height: ${props => props.height};
align-items: ${props => props.alignitems};
background-color: ${props => props.backgroundcolor};
`;

//Titles and Text

export const Title1 = styled.h1.attrs({
  margin: props => props.margin,
  padding: props => props.padding,
  color: props => props.color,
})`
  font-weight: 400;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: 2.2em;
  font-family: 'Raleway', sans-serif;
`;

export const Title2 = styled.h2.attrs({
  color: props => props.color || '#4d4d4d',
  margin: props => props.margin,
  padding: props => props.padding,
  fontweight: props => props.fontweight || '300',
  fontSize: props => props.fontsize || '1.4em',
})`
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-family: 'Raleway', sans-serif;
`;

export const Title3 = Title2.extend.attrs({
  color: props => props.color || '#4d4d4d',
})`
	color: ${props => props.color};
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;

export const Title4 = Title2.extend.attrs({
  color: props => props.color,
  width: props => props.width,
  lineheight: props => props.lineheight,
  textalign: props => props.textalign,
})`
  font-size: 1em;
  color: ${props => props.color};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => (props.primary ? '400' : '600')};
  width: ${props => props.width};
  line-height: ${props => props.lineheight};
  text-align: ${props => props.textalign};
`;

export const Text = styled.p.attrs({
  margin: props => props.margin,
  padding: props => props.padding,
  width: props => props.width,
  lineheight: props => props.lineheight,
  color: props => props.color || '#4d4d4d',
})`
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  line-height: ${props => props.lineheight};
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 0.8em;
`;