import React from 'react'
import styled from 'styled-components'

import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
    display: flex;
    Background-color: #F2F8FC;

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;
`
const Right = styled.div`
flex:1;
padding:20px;


`
const Logo = styled.h1`


`


const Desc = styled.p`
    margin: 20px 0px;

`
const Location = styled.div`


`
const Email = styled.div`



`
const Mobile = styled.div`


`
const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content:center;
    margin:20px;


`

const Input = styled.h3`

`
const Join = styled.a`


`



const Title = styled.h3`
    margin-bottom:30px;

`

const Lists = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`

const ListItem = styled.li`
    width:33.333333333333333%;
    margin-bottom:10px;
`




const Footer = () => {
   
  return (
    <div>
        
        <Container>
            <Left>
                <Logo>TRACE</Logo>
                <Desc>
                We earned a reputation of being good at what we do.
                Let us take your online shop to new dimension in 
                success!
                </Desc>
                <Location>
                    <GpsFixedOutlinedIcon/>
                    Comilla, Bangladesh 3500
                </Location>
                <Email>kawsarahmed0210@gmail.com</Email>
                <Mobile>01647470457</Mobile>
                
                <SocialContainer>
                        <SocialIcon>
                            <FacebookOutlinedIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <InstagramIcon />                
                        </SocialIcon>
                        <SocialIcon>
                            <TwitterIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <LinkedInIcon />
                        </SocialIcon>
                </SocialContainer>
            </Left>

            <Right>
                <Logo>RECEIVE EMAIL UPDATES</Logo>
                <Input>
                    <input type="text" placeholder='Enter Your Email'></input>
                </Input>

                <Join>
                    <button>Join</button>
                </Join>
                <Location>
                    <GpsFixedOutlinedIcon/>
                    Comilla, Bangladesh 3500
                </Location>
                <Email>kawsarahmed0210@gmail.com</Email>
                <Mobile>01647470457</Mobile>
                
    
    <Title></Title>

    <Lists>
        <ListItem>SHOP</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>Collection</ListItem>
        <ListItem>Outlet</ListItem>
        <ListItem>LookBook</ListItem>
        <ListItem>HELP</ListItem>
        <ListItem>FAQ</ListItem>
        <ListItem>Privacy Policies</ListItem>
        <ListItem>Terms and Conditions</ListItem>
        <ListItem>Return & Exchanges</ListItem>
        <ListItem>ABOUT</ListItem>
        <ListItem>Journal</ListItem>
        <ListItem>Our Story</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Store Location</ListItem>
    </Lists>
                
              
            </Right>
    </Container>
    
                        
        
        </div>
  )
}

export default Footer



/*
  <Title>SHOP</Title>


                <Lists>
                        <ListItem>Shop</ListItem>
                        <ListItem>Collection</ListItem>
                        <ListItem>Outlet</ListItem>
                        <ListItem>LookBook</ListItem>
                </Lists>

                    <Title1>HELP</Title1>
                const Title1 = styled.h4`
                
                
                `

                const Title1 = styled.h4`
                
                
                `

                const

                <Lists1>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Privacy Policies</ListItem>
                        <ListItem>Terms and Conditions</ListItem>
                        <ListItem>Return & Exchanges</ListItem>
                        <ListItem>ABOUT</ListItem>
                </Lists1>


                <Title2>ABOUT Us</Title2>

                const Title2 = styled.h4`
                
                
                `

                <Lists2>
                        <ListItem>Journal</ListItem>
                        <ListItem>Our Story</ListItem>
                        <ListItem>Contact</ListItem>
                        <ListItem>Store Location</ListItem>
                </Lists2>


*/