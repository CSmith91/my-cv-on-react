import React from 'react';

function Education(){
    
    const educationList = (
        <div>
            <h3>Education</h3>
            <h4>HyperionDev</h4>
            <h5>(Currently enrolled)</h5>
            <p>Web Development Bootcamp</p>
            <h4>Exeter University</h4>
            <h5>Sep 10 - Jun 13</h5>
            <p>BSc (Hons) 2:1, Mathematics</p>
        </div>
    )

    return(
        <div>
            {educationList}
        </div>
    )

}

export default Education;