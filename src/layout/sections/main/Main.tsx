import React from 'react';
import photo from '../../../assets/images/zarror.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"} align={"flex-start"} justify="center">
                    <Block>
                        <Title>Hello!<br/>I’m Zarror Nibors</Title>
                     <InsideBlock>
                        <Name>I’am freelance <span>web developer</span> based in Indonesia who loves to craft attractive design
                            experiences for the web.</Name>
                         <InsideSecondBlock>
                             <Link><Icon iconId={"mailSVG"} width={"20"} height={"20"} viewBox={"0 0 20 20"} />Email me</Link>
                             <Link><Icon iconId={"downloadSVG"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>Download CV</Link>
                         </InsideSecondBlock>
                     </InsideBlock>
                        <MainTitle>web developer</MainTitle>
                    </Block>
                </FlexWrapper>
            </Container>
            {/*<Photo src={photo} alt="web developer"/>*/}


        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 80vh;
    background-color: ${theme.colors.primaryBg};
    position: relative;
    display: flex;
    z-index: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        background-image: url(${photo});
        background-size: cover;
        background-position: center right;
        background-repeat: no-repeat;
        z-index: 1;
    }
`

const Block = styled.div`
    width: 735px;
    height: 428px;
    border: 1px solid red;
    z-index: 2;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 80px;
`

const MainTitle = styled.h1`
    display: none;

`


const InsideBlock = styled.div`
    width: 404px;
    height: 202px;
    border: 1px solid red;
`

const Name = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    color: rgba(255, 255, 255, 0.5);
    
    span {
        color: ${theme.colors.font};
    }
`

const InsideSecondBlock = styled.div`
    margin-top: 30px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`
const  Link = styled.a`
    font-weight: 400;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center; 
    justify-content: center; 
    
    
    &:nth-child(1){
        width: 203px;
        height: 64px;
        background-color: ${theme.colors.accent};
        gap: 11px; 
    }

    &:nth-child(2){
        width: 201px;
        height: 44px;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        gap: 5px;
    }
`

