const initialState = {
    trending: [],
    loading: false,
    error: null
}

const getTrendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                trending: [...action.payload.data, ...state.trending],
                loading: true,
                error: null
            }
        case 'TRENDING_ERROR': {
            return {
                trending: state.trending,
                loading: true,
                error: action.payload
            }
        }
        default:
            return state;
    }
}

export default getTrendingReducer;