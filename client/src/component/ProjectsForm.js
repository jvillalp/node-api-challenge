import React from 'react';

const ProjectsForm = props => {
    return(
        <div>
            <button onClick={props.getProjectsBtn}>Get Your Projects</button>
        </div>
    )
}

export default ProjectsForm;