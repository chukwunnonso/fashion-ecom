import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 60px;
Background-color: #FFF;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    text-align:center:
`

const Logo = styled.h1`
    font-weight:bold;

`

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;

`
const SearchContainer = styled.div `
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`

const Favorite = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`


const ShoppingCart = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`


const Input = styled.input`
    border:none;

`

const Center = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    display:flex;

`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Logo>TRACE</Logo></Left>
            <Center>
                        <MenuItem ><Link to='/'>HOME</Link></MenuItem>
                        <MenuItem ><Link to='/productlist'>SHOP</Link></MenuItem>
                        <MenuItem ><Link to='/checkout'>CHECKOUT</Link></MenuItem>
                        {/* <MenuItem to='/ProductsList'>SHOP</MenuItem>
                        <MenuItem to='/checkout'>HOME</MenuItem> */}
                
            </Center>
            <Right>
                <SearchContainer>
                    <SearchIcon/>
                </SearchContainer>
                <Favorite>
                    <FavoriteBorderIcon/>
                </Favorite>
                <ShoppingCart>
                    <ShoppingCartOutlinedIcon/>
                </ShoppingCart>
                    
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar




/**
 
<Center>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                        <a href="#">SHOP</a>
                        <a href="#">LOOKBOOK</a>
                    </li>
                </ul>
                
            </Center>
 */