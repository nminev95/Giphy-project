import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrending } from "../redux/actions/trendingGifsAction";

const TrendingPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrending());
    }, []);

    return (
        <h1>this is the trending page</h1>
    )
}

export default TrendingPage;