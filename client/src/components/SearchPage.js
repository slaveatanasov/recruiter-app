import React from "react";
import { connect } from "react-redux";
import { getCVsSearchResults, getCompaniesSearchResults } from '../actions/searchAction';
import { Link } from 'react-router-dom';

export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_field: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    submitForm = (e) => {
        if (this.props.auth.user.type === "company") {
            this.props.getCVsSearchResults(this.state.search_field);
        } else {
            this.props.getCompaniesSearchResults(this.state.search_field);
        }
    }

    // submitFormByEnter = (e, cb) => {
    //     console.log(this.state);
    //     if(e.key === "Enter"){
    //         e.preventDefault();
    //         cb();
    //       }
    // }
    // onKeyPress={(e) => {this.submitFormByEnter(e, searchResults)}} <- use it on the input

    render() {
        // const searchResults = this.props.getSearchResults(this.state.search_field);
        return (
            <div className="container">
                <div className="search-wrapper">
                    <div className="search-title">
                        <h1>Search</h1>
                    </div>

                    <div className="search">
                        <form>
                            <input type="search" className="search-field" name="search_field"
                                placeholder="Search by tags; use empty space between multiple tags." onChange={this.handleChange} />
                            <input type="button" onClick={this.submitForm} className="search-button" value="" />
                        </form>
                    </div>
                    <div className="search-results-wrapper">
                        {(this.props.auth.user.type === "company") 
                            ?
                            <div className="search-results">
                                {(this.props.cvs !== undefined)
                                    ?
                                    this.props.cvs.map(item =>
                                        <div className="search-result-item" key={item._id}>
                                            <p>Name:</p>
                                            <h3>{item.first_name + " " + item.last_name}</h3>
                                            <p>Country:</p>
                                            <h4>{item.location_country}</h4>
                                            <p>City:</p>
                                            <h4>{item.location_city}</h4>
                                            <p>Occupation:</p>
                                            <h4>{item.experience_position}</h4>
                                            <Link to={`/showpage/${item._id}`}><button type="button">Show complete profile</button></Link>
                                        </div>
                                    ) 
                                    : 
                                    null
                                }
                            </div>
                            :
                            <div className="search-results">
                                {(this.props.companies !== undefined)
                                    ?
                                    this.props.companies.map(item =>
                                        <div className="search-result-item" key={item._id}>
                                            <p>Company name:</p>
                                            <h3>{item.company_name}</h3>
                                            <p>Country:</p>
                                            <h4>{item.location_country}</h4>
                                            <p>City:</p>
                                            <h4>{item.location_city}</h4>
                                            <p>Industry:</p>
                                            <h4>{item.company_information_industry}</h4>
                                            <Link to={`/showpage/${item._id}`}><button type="button">Show complete profile</button></Link>
                                        </div>
                                    )
                                    : 
                                    null
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cvs: state.search.cvs,
    companies: state.search.companies,
    auth: state.auth
})

SearchPage = connect(mapStateToProps, { getCVsSearchResults, getCompaniesSearchResults })(SearchPage)