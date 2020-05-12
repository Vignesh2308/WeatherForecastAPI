import React from 'react'

function RightContent(props){
    return(
        <React.Fragment>
            <div id='rightcontent'>
                <table className='table table-borderless text-white'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Feels Like</td>
                            <td>{props.feel}&#8451;</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.pressure} Hpa</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{props.wind} Km/h</td>
                        </tr>
                        <tr>
                            <td>Sun Rise</td> 
                            <td>{props.sunrise}</td>
                        </tr>
                        <tr>
                            <td>Sun Set</td>
                            <td>{props.sunset}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default RightContent;