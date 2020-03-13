import React from 'react';
import cuid from 'cuid';

const ActionsDisplay = props => {
    return(
        <div>
            {props.ActionsDisplay.map(actions => {
                return(
                    <div key={cuid()}>
                        <h2>Description: {actions.description}</h2>
                        <h3>{actions.notes}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ActionsDisplay;