import React from 'react'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { AiOutlineSearch } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import logo from '../assets/logo.png'
import styled from 'styled-components';


const Container = styled.div`
    height: 60px;
    ${mobile({ backgroundColor: "green" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
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
`

const ShoppingCart = styled.div`
    display:flex;
    align-items:center;
    
`

const Center = styled.div`
    display:flex;
    align-items:center;
`;

const Right = styled.div`

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
    margin: 0 1em;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Link to='/'><Logo>TRACE</Logo></Link></Left>
            <Center>
                <MenuItem ><Link to='/'>HOME</Link></MenuItem>
                <MenuItem ><Link to='/productlist'>SHOP</Link></MenuItem>   
            </Center>
            <Right>
                <ShoppingCart>
                    <Link to='/checkout'><BsCart3/></Link>
                </ShoppingCart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
