import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo512.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const Navbar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flexDirection: row;
        width: 100%;
        background: lightgray;
    `;

    const Menu = styled.ul`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25em;
        margin: 0;
    `;

    const MenuItem = styled.li`
        list-style-type: none;
        text-decoration: none;
    `;

    const SearchForm = styled.form`
        display:flex;
        flex-direction:row;
        margin-right: 1em;
        height: 2.5em
    `;

    const SearchInputField = styled.input`
        type: text;
        border: none;
        outline: none;
        border-radius: 7px;
        width: 16em;
        border-top-right-radius: 0px 0px;
        border-bottom-right-radius: 0px 0px;
    `;

    const Button = styled.button`
        background: white;
        border: none;
        outline:none;
        border-radius: 7px;
        width: 2.5em;
        border-top-left-radius: 0px 0px;
        border-bottom-left-radius: 0px 0px;
        &:hover {
            color: black;
            background: white;
        }
    `;

    const Logo = styled.img`
        width: 3em;
        height: 3em;
        margin: 15px;
    `;

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;
        &:hover {
            color: white;
        }
    `;

    const StyledFontawesomeIcon = styled(FontAwesomeIcon)`
        color: gray;
        &:hover {
            color: black;
            background: white;
        }
    `;

    return (
        <>
            <Navbar>
                <Menu>
                <Logo src={logo}/>
                    <StyledLink to='/trending'><MenuItem>Trending</MenuItem></StyledLink>
                    <StyledLink to='/categories'><MenuItem>Categories</MenuItem></StyledLink>
                    <StyledLink to='/favorites'><MenuItem>Favorites</MenuItem></StyledLink>
                </Menu>
                <SearchForm>
                    <SearchInputField placeholder='Search gifs'></SearchInputField>
                    <Button><StyledFontawesomeIcon icon={faSearch}/></Button>
                </SearchForm>
            </Navbar>
        </>
    )
}

export default Navbar;