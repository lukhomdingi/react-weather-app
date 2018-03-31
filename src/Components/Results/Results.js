import React, { Component } from "react";

class Results extends Component
{
    render()
    {
        const data = this.props.results;
        const kilo = 1.60934;
        const celcius = -273.15;

        const currentDate = new Date(data.dt * 1000);
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);
        return (
            <div id="results">
                <h2 className="text-muted">Weather in {data.name + ', ' + data.sys.country.toUpperCase()}</h2>
                <h4>{(data.main.temp + celcius) + " °C"}</h4>
                <h6>{data.weather[0].description}</h6>
                <span>{("0" + currentDate.getHours()).slice(-2) + ':' + ("0" + currentDate.getMinutes()).slice(-2) + ' ' + ("0" + currentDate.getDate()).slice(-2) + '/' + ("0" + (currentDate.getMonth() + 1)).slice(-2) + '/' + currentDate.getFullYear()}</span>
                <div className="table">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <td>Wind</td>
                                <td>{(data.wind.speed * kilo).toFixed(2) + " km/s" + data.wind.deg ? (' (' +  data.wind.deg + ')') : ''}
                                </td>
                            </tr>
                            <tr>
                                <td>Cloudiness</td>
                                <td>{data.clouds.all + '%'}</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>{data.main.pressure + ' hpa'}</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{data.main.humidity + '%'}</td>
                            </tr>
                            <tr>
                                <td>Sunrise</td>
                                <td>{("0" + sunrise.getHours()).slice(-2) + ':' + ("0" + sunrise.getMinutes()).slice(-2)}</td>
                            </tr>
                            <tr>
                                <td>Sunset</td>
                                <td>{("0" + sunset.getHours()).slice(-2) + ':' + ("0" + sunset.getMinutes()).slice(-2)}</td>
                            </tr>
                            <tr>
                                <td>Geo coordinates</td>
                                <td>[{data.coord.lat + ', ' + data.coord.lon}]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// Results.propTypes = {
//     results: React.PropTypes.object.isRequired
// };
export default Results;