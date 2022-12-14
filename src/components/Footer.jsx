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
    margin-bottom:0;
    padding-top: 4em;
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
    margin-left:230px;
    width: 83px;
    height: 38px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: #22262A;
`


const Desc = styled.p`
    margin: 20px 0px;
    width: 406px;
    height: 69px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #22262A;
    margin-left:230px;



`
const Location = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:230px;
    width:56%;
    height: 23px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #22262A;
`
const Email = styled.div`
    margin: 16px 0 3px 230px;
    width: 237px;
    height: 23px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #22262A;
`
const Mobile = styled.div`
    margin-left:230px;
    width: 96px;
    height: 23px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #22262A;
    margin-top:4px;
`
const SocialContainer = styled.div`
    display:flex;
    margin-left:230px;
    width:109px;
    height:17px;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content:center;
    margin:20px 20px 20px 0;
    cursor:pointer;

`


const Join = styled.a`
    width: 36px;
    height: 23px;
    left: 1303px;
    top: 4074px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    color: #22262A;
    cursor:pointer;
`

const LogoRight = styled.h1`
    width:387px;
    height:38px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: #22262A;
    margin-bottom:24px;

`
const Newsletter = styled.h1`
    width:50%;
    background-color:white;
    display:;flex;
    aligh-items:center;
    justify-content: center;
    flex-direction:column;
    margin-bottom:81px;
`

const NewsTitle = styled.div`
    
`


const NewsDescription = styled.h1`
    

`
const InputContainer = styled.div`
    width:532px;
    height:45px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    
`

const Input = styled.input`
    border:none;
    flex:10;
    padding-left:20px;

`

const Button = styled.button`
    flex:2;
    background-color:white;
    color:Black
    border:1px solid white;
   
    
`





const TitleShop = styled.h3`
    margin-bottom:27px;
    Width: 55px;
    height: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    cursor:pointer;
`

const ListShop = styled.ul`
    list-style:none;
    padding:0;
    

`

const ListItem = styled.li`
    
    margin-bottom:21px;
    padding:0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    cursor:pointer;
`



const TitleHelp = styled.h3`
    width: 47px;
    height: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #22262A;
    cursor:pointer;
    margin-bottom:27px;
`

const ListHelp = styled.ul`
    list-style:none;
    padding:0;

`

const TitleAbout = styled.h3`
    width: 69px;
    height: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #22262A;
    cursor:pointer;
    margin-bottom:27px;
`

const ListAbout = styled.ul`
    list-style:none;
    padding:0;

`


const EnclosureShop = styled.h5`


`
const EnclosureHelp = styled.h5`


`

const EnclosureAbout = styled.h5`


`





const FooterContainer = styled.h3`
    display: flex;
    flex: 1;
    justify-content:space-between;
    align-items:center;
    width:70%;
`


const Copyright = styled.p`
    width: 100%;
    height: 93px;
   

    background: #E7F5F8;
    
    justify-content:center;

`

const FooterCopy = styled.div`

    width: 500px;
    height: 23px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    margin-left: 577px;
    padding:35px 35px;
    



    color: #22262A;



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
                    <p>Comilla, Bangladesh 3500</p>
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
                <LogoRight>RECEIVE EMAIL UPDATES</LogoRight>
                
                <Newsletter>
                    <NewsTitle></NewsTitle>
                    <NewsDescription></NewsDescription>
                    <InputContainer>
                        <Input placeholder='Your Email Address Here'/>
                        <Button>
                            
                            Join
                            
                        </Button>
                    </InputContainer>
                </Newsletter>
                
    <FooterContainer>

            <EnclosureShop>      
                <TitleShop>SHOP</TitleShop>

                <ListShop>
                    <ListItem>Shop</ListItem>
                    <ListItem>Collection</ListItem>
                    <ListItem>Outlet</ListItem>
                    <ListItem>Lookbook</ListItem>
                </ListShop>
            </EnclosureShop>

            <EnclosureHelp>
                <TitleHelp>HELP</TitleHelp>   
                    <ListHelp>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Privacy Policies</ListItem>
                        <ListItem>Terms and Conditions</ListItem>
                        <ListItem>Return & Exchanges</ListItem>
                    </ListHelp>
            </EnclosureHelp>


            <EnclosureAbout>        
                    <TitleAbout>ABOUT</TitleAbout>
                        <ListAbout>
                            <ListItem>Journal</ListItem>
                            <ListItem>Our Story</ListItem>
                            <ListItem>Contact</ListItem>
                            <ListItem>Store Location</ListItem>
                        </ListAbout>
            </EnclosureAbout>
    </FooterContainer>

            </Right>
    </Container>

    <Copyright>
        <FooterCopy>
            <p>Copyright © 2020 . TRACE  All rights reserved</p>
        </FooterCopy>

    </Copyright>
    
                        
        
        </div>
  )
}

export default Footer



/*
  <LogoRight>RECEIVE EMAIL UPDATES</LogoRight>
                
                <Newsletter>
                    <Input>
                        <input type="text" placeholder='Enter Your Email'></input>
                    </Input>

                    <Join>
                        <button>Join</button>
                    </Join>
                </Newsletter>


            const Input = styled.h3`
    width: 532px;
    height: 45px;
    left: 830px;
    top: 4063px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.07);
    border-radius: 5px;

`





*/



