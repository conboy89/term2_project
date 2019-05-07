import React from "react";

const MemePresentation = ({cats}) => (
    <div>
        <h2>STUFF</h2>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <ul>
            {
                cats.map(({id, url}) => <li key={id}><img className="cats" src={url}/></li>)
            }
        </ul>
    </div>
);

export default MemePresentation;
