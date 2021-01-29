import styled, { keyframes, css } from 'styled-components';

const Loader = ({ visible }) => {
    console.log(visible);
    const LoadingAnimation = keyframes`  
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    `;

    const StyledLoader = styled.div`     
        ${visible ?
            css`visibility: visible;` :
            css`visibility: hidden;`
        }
        width: 3em;
        height: 3em;
        color: red;
        border-radius: 50%;
        border: 0.75em solid var(--loader-bg-color);
        border-top-color: var(--loader-acc-color); /* overrides top color to stand out */
        animation: 2s infinite example-one;
        animation-name: ${LoadingAnimation};
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    return (
        <StyledLoader />
    )
}

export default Loader;