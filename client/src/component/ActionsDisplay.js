import React from 'react';
import cuid from 'cuid';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
background:papayawhip;
`;


const ActionsDisplay = props => {
    return(
        <div>
            {props.ActionsDisplay.map(actions => {
                return(
                    <div key={cuid()}>
                        <Title>Action: {actions.description}</Title>
                        <h3>{actions.notes}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ActionsDisplay;