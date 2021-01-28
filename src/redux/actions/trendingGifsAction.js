import axios from 'axios'
import { GET_TRENDING, TRENDING_ERROR } from '../constants.js'
import { TRENDING_URL, API_KEY } from '../../assets/constants.js'

export const getTrending = () => async dispatch => {

    try {
        const res = await axios.get(`${TRENDING_URL}${API_KEY}`);
        dispatch({
            type: GET_TRENDING,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TRENDING_ERROR,
            payload: e,
        })
    }
}