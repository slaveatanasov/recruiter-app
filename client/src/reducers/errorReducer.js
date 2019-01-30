const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_ERRORS':
            console.log("INSIDE GET ERRS");
            console.log(action.payload);
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}