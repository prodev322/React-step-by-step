import React, { Fragment } from 'react';
import ListItem from './listitem';

const lists = [
    {
        id: 1,
        name: "Item1",
        description: "This is Item1"
    },
    {
        id: 2,
        name: "Item2",
        description: "This is Item2"
    },
    {
        id: 3,
        name: "Item3",
        description: "This is Item3"
    },
    {
        id: 4,
        name: "Item4",
        description: "This is Item4"
    }
];

export default function List() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="main-page">
                    <Fragment>
                        <a href="/">Home</a>
                        <br />
                        <dl>
                            {lists.map(item => {
                                return (
                                    <ListItem content={item}/>
                                );
                            })}
                        </dl>
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

// export function Add(a, b) {
//     return (a + b);
// };