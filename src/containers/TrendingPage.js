import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../redux/actions/trendingGifsAction";
import SingleGifView from '../components/SingleGifView';
import styled, { css } from 'styled-components';
import Loader from "../utils/Loader";

const TrendingPage = () => {

    const dispatch = useDispatch();
    const trendingGifs = useSelector(state => state.getTrendingReducer.trending);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedCounter = useRef(1);
    const arrayLength = trendingGifs.length;

    const imageLoaded = () => {
        console.log(loadedCounter.current);
        console.log('length' + arrayLength)
        // if (imagesLoaded) {
        //     return;
        // }
        loadedCounter.current += 1;
    }

    useEffect(() => {
        if (trendingGifs.length !== 0) {
            return;
        }
        dispatch(getTrending());
    }, []);

    const CardGrid = styled.section`
        ${loadedCounter.current === trendingGifs.length ?
            css`visibility: visible;` :
            css`visibility: hidden;`
        }
        margin-right: 3em;
        margin-left: 3em;
        margin-top: 3em;
        line-height: 4em;
        -webkit-column-count: 5;
        -webkit-column-gap: 3em;
        -moz-column-count: 5;
        -moz-column-gap: 3em;
        column-count: 5;
        column-gap: 3em;  
        @media (max-width: 1200px) {           
            -moz-column-count:    4;    
            -webkit-column-count: 4;
            column-count:         4;
        }
        @media (max-width: 1000px) {
            -moz-column-count:    3;
            -webkit-column-count: 3;
            column-count:         3;
        }
        @media (max-width: 800px) {
            -moz-column-count:    2;
            -webkit-column-count: 2;
            column-count:         2;
        }
        @media (max-width: 600px) {
            #photos {
            -moz-column-count:    1;
            -webkit-column-count: 1;
            column-count:         1;
            }
        }
    `;

    return (
        <>
            <Loader visible={!(loadedCounter.current === trendingGifs.length)} />
            <CardGrid>
                {trendingGifs.map((gif) => <SingleGifView imageLoaded={imageLoaded} key={gif.id} imageSource={gif.images.downsized_medium} />)}
            </CardGrid>
        </>
    )
}

export default TrendingPage;