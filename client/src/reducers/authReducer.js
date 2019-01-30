import isEmpty from '../utils/isEmptyValidation';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case 'SET_UPDATED_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: {
                    ...state.user,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    email: action.payload.email
                }
            };
        default:
            return state;
    }
}