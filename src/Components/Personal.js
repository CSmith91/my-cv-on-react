import React from 'react';

function Personal(props){
    
    // using the props (parameter) that are entered into our Component (function) we can automate the building of this block of code
    // that displays a desired icon next to our relevant information. We give these elements class names for easy and specific CSS styling

    const iconAndInfo = (
        <div className='iconBlock'>
            <div className='child-div'>
                <img src={props.icon} className='icon'/>
            </div>
            <div className='child-div'>
                {props.details}
            </div>
        </div>
    )

    return(
        <div>
            {iconAndInfo}
        </div>
    )

}

export default Personal;