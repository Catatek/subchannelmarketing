import React from 'react';
import styled, {css} from 'styled-components';

export const Row = styled.div.attrs({
width: props => props.width,
margin: props => props.margin,
justifycontent: props => props.justifycontent,
alignitems: props => props.alignitems,
height: props => props.height,
backgroundcolor: props => props.backgroundcolor,
})`
display: flex;
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
width: ${props => props.width};
margin: ${props => props.margin};
justify-content: ${props => props.justifycontent};
height: ${props => props.height};
align-items: ${props => props.alignitems};
background-color: ${props => props.backgroundcolor};
`;