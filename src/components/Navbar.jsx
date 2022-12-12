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
    width: 92px;
    height: 43.04px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: #22262A;
    margin-left:88px;



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
    width: 254px;
    height: 27.67px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    width: 148px;
    height: 18.45px;
    margin:25px 75px 25px 461px;

`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    display:flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #22262A;
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