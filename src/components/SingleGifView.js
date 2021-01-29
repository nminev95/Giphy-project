import styled from 'styled-components';

const SingleGifView = ({ imageSource, imageLoaded}) => {

    const CardImage = styled.img`
        width: 100% !important;
        height: auto !important;
        border-radius: 8px;
        border: 1px solid #dddddd;
        padding: 10px;
    `;

    return (
        <>
            <CardImage src={imageSource.url} onLoad={imageLoaded}></CardImage>
        </>
    )
}

export default SingleGifView;