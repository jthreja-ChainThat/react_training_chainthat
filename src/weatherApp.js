import React, { PureComponent,createRef } from 'react'
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';
import axiosInstance from "./utils/axiosInstance";

class WeatherApp extends PureComponent {

    inputRef = createRef();
    state = { weather: "" };
    searchWeather = async (event) => {
        event.preventDefault();
        const res = await axiosInstance.get("weatherData?place="+this.inputRef.current.value);

        console.log(res.data[0].temperature);

        this.setState({ weather: res.data[0].temperature });
    }

    render() {
        return (
            <div className="container">
                <WeatherForm searchWeather ={this.searchWeather} inputRef ={this.inputRef}/>
                <span>
                    {/* {this.inputRef.current?this.inputRef.current.value:""} */}
                    <WeatherResult temperature = {this.state.weather}/>
                </span>
            </div>
        );
    }
}
export default WeatherApp;