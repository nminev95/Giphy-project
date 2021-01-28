const initialState = {
    trending: [],
    loading: true,
    error: null
}

const getTrendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRENDING':
            return {
                trending: [...state, ...action.payload],
                loading: false,
                error: null
            }
        case 'TRENDING_ERROR': {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        default:
            return state;
    }
} 