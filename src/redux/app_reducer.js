const SET_CF_TOGGLE = 'app/SET_CF_TOGGLE ';

let initialState = {
    cfToggle: '°C'
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CF_TOGGLE:
            return {
                ...state, cfToggle: action.payload
            }
        default: return state;
    }
};

export const setCfToggle = (payload) => ({ type: SET_CF_TOGGLE, payload })

// export const getAuth = () => async (dispatch) => {
//     let data = await authAPI.authMe()
//     if (data.resultCode === 0) {
//         dispatch(setUserData(data));
//     }
// }

export default appReducer;