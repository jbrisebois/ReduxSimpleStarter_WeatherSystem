import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                       <th>City</th> 
                       <th>Temperature</th> 
                       <th>Pressure</th> 
                       <th>Humidity</th> 
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/*
//ORIGINAL
function mapStateToProps() {
    return { weather : state.weather };
}*/

/* 
//Refactor 1
function mapStateToProps({weather}) {
    return { weather : weather };
} */

//Refactor 2
function mapStateToProps({weather}) {
    return { weather }; // === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);