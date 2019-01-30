const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_CVS_SEARCH_RESULTS':
            return {
                ...state,
                cvs: action.payload
            };
        case "GET_COMPANIES_SEARCH_RESULTS":
            return {
                ...state,
                companies: action.payload
            }
        default:
            return state;
    }
}