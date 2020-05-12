import React from 'react'
import TopContent from './TopContentComp'
import LeftContent from './LeftContentComp'
import RightContent from './RightContentComp'

class Content extends React.Component{

    constructor(props){
        super(props);
        this.state ={}
        console.log(this.props.sunrise);
    }

    render(){
        return(
            <React.Fragment>
                <div id='content' className='jumbotron'>
                    <TopContent  city={this.props.city} country={this.props.country}/>
                    <LeftContent icon={this.props.icon} cloud={this.props.cloud} temp={this.props.temp} humidity={this.props.humidity} />
                    <RightContent feel={this.props.feel} 
            pressure={this.props.pressure} wind={this.props.wind}
             sunrise={this.props.sunrise} sunset={this.props.sunset}/>
                </div>
                <br/>                
            </React.Fragment>
        );
    }
}

export default Content;