import styled, { css } from 'styled-components';

const GifGrid = (props) => {

    const CardGrid = styled.section`
        ${props.visible ? 
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
        <CardGrid>{props.children}</CardGrid>
    )
}

export default GifGrid;