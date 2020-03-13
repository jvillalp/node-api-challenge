import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "black" : "palevioletred"};
color: ${props => props.primary ? "palevioletred" : "white"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const ProjectsForm = props => {
    return(
        <div>
            <Button onClick={props.getProjectsBtn}>Get Your Projects</Button>
        </div>
    )
}

export default ProjectsForm;