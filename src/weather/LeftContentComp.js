import React from 'react'

function LeftContent(props){
    let code;
    if(props.icon !==''){
    code ='http://openweathermap.org/img/w/'+props.icon + '.png';}
    else {code = 'logo192.png';}
    return( 
        <React.Fragment>
            <div id='leftcontent'>
                <div id='tempIcon'>
                    <img src={code} alt='Logo' height='100' width='100'/><br />
                    {props.cloud}
                </div>
                <div>
                    <table className='table table-borderless text-white'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Temp</td>
                                <td>{props.temp}&#8451;</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{props.humidity}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LeftContent;