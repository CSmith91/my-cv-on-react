import React from 'react';


function Skills(props){

    // we return the name component of the prop and export this 
    const name = props.name;

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}


export default Skills;