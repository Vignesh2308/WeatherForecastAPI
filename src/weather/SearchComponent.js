import React from 'react'
import Content from './ContentComponent'

export default class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            cloud: '',
            city: 'City',
            country: 'Country',
            icon: '',
            temp: '0',
            humidity: '0',
            feel: '0',
            pressure: '0',
            wind: '0',
            sunrise: '00:00:00',
            sunset: '00:00:00',
            input: '',
            valid: ''
        }
        this.weather = this.weather.bind(this);
    }

change = (e) =>{
    const value = e.target.value;
    const field =  e.target.name;
    this.setState({[field]:value});
    
}

submit =(e) =>{
    e.preventDefault();
    
    if(this.state.input===''){
        this.setState({valid:'Provide City Name'});
    }
    else this.weather(this.state.input);
}

weather(value){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&units=metric&appid=001b0f58045147663b1ea518d34d88b4')
    .then(res => res.json())
    .then(result =>{
        console.log(result);

        var wind_speed = result.wind.speed* 2.23694*1.60934;
        wind_speed = wind_speed.toFixed(2);
        this.setState({cloud: result.weather[0].description});
        this.setState({city:result.name});
        this.setState({country:result.sys.country});
        this.setState({icon:result.weather[0].icon})
        this.setState({temp:result.main.temp});
        this.setState({humidity:result.main.humidity});
        this.setState({feel:result.main.feels_like});
        this.setState({pressure:result.main.pressure});
        this.setState({wind:wind_speed});

        let unix_timestamp = result.sys.sunrise
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        this.setState({sunrise:formattedTime});

        let unix_timestamp2= result.sys.sunset
        var date2 = new Date(unix_timestamp2 * 1000);
        var hours2 = date2.getHours();
        var minutes2 = "0" + date2.getMinutes();
        var seconds2 = "0" + date2.getSeconds();
        var formattedTime2 = hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);
        this.setState({sunset:formattedTime2});
        this.setState({valid: ''})
    })
    .catch(error=> this.setState({valid: 'Invalid City Name'}));

}

render(){
    return(
        <React.Fragment>
            <div className='container'>
                <div id ='search' className='jumbotron'>
                <h3>Enter the Location</h3>
                <form onSubmit={this.submit}>                
                    <div className="form-group row">
                        <label htmlFor='city' className="col-sm-3 col-form-label"><strong>City Name</strong></label>
                        <div className="col-sm-9">
                            <input type="text" name='input' onChange={this.change} className="form-control" id="city" placeholder='Enter City Name'/>
                        </div>
                    </div>
                    <input type='submit' value='Get Weather' className='btn btn-success btn-sm'/> 
                </form>
                <h3>{this.state.valid}</h3>
                </div>
            </div>
            <Content cloud={this.state.cloud} city={this.state.city} country={this.state.country} icon={this.state.icon} temp={this.state.temp} humidity={this.state.humidity} feel={this.state.feel} 
            pressure={this.state.pressure} wind={this.state.wind} sunrise={this.state.sunrise} sunset={this.state.sunset}/>
        </React.Fragment>
    );
}
}
