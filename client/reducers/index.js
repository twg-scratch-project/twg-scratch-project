
import action from '../actions/actions';

const initialState = {
    user: '',
    travelers: 0,
    location: ""
    }

function travelReducer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return `Trip details not set`;
    }
    
}

export default travelReducer;