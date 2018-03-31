import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component
{
    constructor(props)
    {
        super();
        this.api = "8850a76eef07bd51688ef21074a03444";
        this.state = {
            searchQuery: '',
            results: null,
            buttonClicked: false
        };
    }
    getResults()
    {
        if (!this.api || this.api.length !== 32)
            return;
        axios.get('http://api.openweathermap.org/data/2.5/weather',
        {
            params: {
                q: this.state.searchQuery,
                appid: this.api
            }
        })
        .then((response) =>
        {
            this.setState({
                results: response.data
            });            
        }).catch((error) =>
        {
            //It gives a 404 error when the city is not found
            // console.error(error);
            
            this.setState({
                results: null
            });
        }).then(()=>
        {
            this.setState({
                buttonClicked: true
            });
            this.props.updateResults(this.state.results);
        });
        
    } //getResults

    changeSearchQuery(event)
    {
        this.setState({
            searchQuery: event.target.value
        });
    } //changeSearchQuery
    render()
    {
        let noResults = "";
        if (this.state.buttonClicked && !this.state.results)
        {
            noResults =  (
                <div className="row">
                    <div className="col-md-12">
                        <span className="text-muted">No results found</span>
                    </div>
                </div>
            );
        }
        let apiWarning = "";
        if (this.api === '' || this.api.length !== 32)
        {
            apiWarning = (<div className="alert alert-danger">You need a valid API</div>);
        }
        return (
            <div id="search">
            {apiWarning}
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="search" className="form-control" value={this.state.searchQuery} onChange={(event) => this.changeSearchQuery(event)} placeholder="Search City" /> 
                                    <button type="button" className="btn-default input-group-addon" onClick={this.getResults.bind(this)}>Search</button>                      
                        </div>
                    </div>
                </div>
                {noResults}
            </div>);
    } //render
} //class

// Search.propTypes = {
//     updateResults: React.PropTypes.func
// };
export default Search;