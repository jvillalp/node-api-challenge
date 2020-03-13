import React from 'react';
import cuid from 'cuid';

const ProjectsDisplay = props => {
    return(
        <div>
            {props.ProjectsDisplay.map(projects => {
                return(
                    <div key={cuid()}>
                        <h2>Project: {projects.name}</h2>
                        <h3>{projects.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsDisplay;