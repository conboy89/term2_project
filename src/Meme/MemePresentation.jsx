import React from "react";

const MemePresentation = ({cats}) => (
    <div>
        <h2>Funny Cats</h2>
        <p>
        Take a look at some random generated images of cats just being plain old silly (cute)!
        </p>
        <ul>
            {
                cats.map(({id, url}) => <li key={id}><img className="cats" src={url}/></li>)
            }
        </ul>

        
    </div>



);

export default MemePresentation;
