import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Home", "About", "Services"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <ContactMe href="">Contact me</ContactMe>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    
`

const ContactMe = styled.a`
    background-color: ${theme.colors.accent};
    padding: 10px 20px;
    //max-width: 157px;
    height: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
   
    
`