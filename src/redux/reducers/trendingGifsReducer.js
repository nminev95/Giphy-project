const initialState = {
    trending: [],
    loading: false,
    error: null
}

const getTrendingReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                trending: action.payload.data,
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