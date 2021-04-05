import React from 'react';

export default function Listitem(props) {
    return(
        <React.Fragment>
            <dt>{props.content.name}</dt>
            <dd>{props.content.description}</dd>
        </React.Fragment>
    );
}