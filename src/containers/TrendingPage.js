import { useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../redux/actions/trendingGifsAction";
import SingleGifView from '../components/SingleGifView';
import Loader from "../utils/Loader";
import GifGrid from "../components/GifGrid";

const TrendingPage = () => {

    const dispatch = useDispatch();
    const trendingGifs = useSelector(state => state.getTrendingReducer.trending);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedCounter = useRef(1);
    console.log('render');
    const imageLoaded = () => {
       
        console.log(loadedCounter);
        console.log('length' + trendingGifs.length)
        loadedCounter.current += 1;

        if (loadedCounter.current === trendingGifs.length) {
            console.log('change')
            setImagesLoaded((prevState) => !prevState);
        }
    }

    useEffect(() => {
        console.log('get');
        dispatch(getTrending());
    }, []);

    return (
        <>
            <Loader visible={!imagesLoaded} />
            <GifGrid visible={imagesLoaded}>
                {trendingGifs.map((gif) => <SingleGifView imageLoaded={imageLoaded} key={gif.id} imageSource={gif.images.downsized_medium} />)}
            </GifGrid>
        </>
    )
}

export default TrendingPage;