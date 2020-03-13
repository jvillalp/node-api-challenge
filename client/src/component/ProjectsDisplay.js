import React from 'react';
import cuid from 'cuid';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: papayawhip;
background:palevioletred;
`;


const ProjectsDisplay = props => {
    return(
        <div>
            {props.ProjectsDisplay.map(projects => {
                return(
                    <div key={cuid()}>
                        <Title>Project: {projects.name}</Title>
                        <h3>{projects.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsDisplay;