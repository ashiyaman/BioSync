import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE } from "./actions";

const initialState = {profiles: [], averageAge: 0}

const profileReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case ADD_PROFILE:
            return {...state, profiles: [...state.profiles, action.payload]}
        case CALCULATE_AVERAGE_AGE:
            console.log(state.profiles)
            return {
                ...state,
                averageAge: (state.profiles.reduce((totalAge, curr) => totalAge + curr.age, 0)) / state.profiles.length
            }
        default:
            return state
    }
}

export default profileReducer