import axios from "axios";

export const getCVsSearchResults = (searchData) => dispatch => {
    axios.get('http://127.0.0.1:80/search/cvs?tags=' + searchData)
    .then(res => {
        dispatch(searchResultsCVs(res.data));
    })
    .catch(err => {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
    );
}

export const searchResultsCVs = (cvs) => {
    return {
        type: 'GET_CVS_SEARCH_RESULTS',
        payload: cvs
    }
}

export const getCompaniesSearchResults = (searchData) => dispatch => {
    axios.get('http://127.0.0.1:80/search/companies?tags=' + searchData)
    .then(res => {
        dispatch(searchResultsCompanies(res.data));
    })
    .catch(err => {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
    );
}

export const searchResultsCompanies = (companies) => {
    return {
        type: 'GET_COMPANIES_SEARCH_RESULTS',
        payload: companies
    }
}

