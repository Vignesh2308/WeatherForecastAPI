import React from 'react'

function TopContent(props){
    return(
        <React.Fragment>
            <div id='topcontent'>
                <h5>{props.city}, {props.country}</h5>
            </div>
        </React.Fragment>
    );
}

export default TopContent;