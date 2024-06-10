import React from 'react';
import styled from "styled-components";
import {Contacts} from "../sections/contacts/Contacts";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../sections/social/Social";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column">
                <FooterWrapper>
                        <Social/>
                        <Contacts/>
              </FooterWrapper>
                <Copyright>Created by <span>Zarror</span> | All Reserved!</Copyright>

                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
    background-color: ${theme.colors.secondaryBg};
    padding: 100px 0 60px;

`

const FooterWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    margin-bottom: 100px;
   gap: 256px;
    
`

const Copyright = styled.small`

    
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);

    span {
        font-weight: 700;
        color: ${theme.colors.font};
    }
  
`